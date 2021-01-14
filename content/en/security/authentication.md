---
title: Authentication
description: ''
position: 8
category: Security
---

## Enable Auth

1. set `pepper.auth.disabled` to `false` to enable authentication.
2. There should be a pepper class correspond to your defined user model. for example, if you have specified `App\Models\User::class` as your user model, you must have `App\Pepper\User::class` class.

Authentication is done using JWT utilizing [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth) package.

1. update `.env` file to include `JWT_SECRET` secret ([learn more](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)):

```bash
php artisan jwt:secret
```

2. Update you `User` model:

```php
<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
```

3. Configure Auth guard

in `config/auth.php` make sure to set:

```php
'defaults' => [
    'guard' => 'api',
    'passwords' => 'users',
],

...

'guards' => [
    'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
],
```

4. Enable authentication query and mutation in `config/pepper.php`:

```php

...

'auth' => [
    'disabled' => false
    ...
],
```

## Login

```graphql
{
  login(
    email: "amirmasoud@pepper.test"
    password: "123456789"
  ) {
    token
  }
}
```

Return response would be JWT token if login credentials are valid; otherwise, it would be an authorization error.

### Override login args

Add new method called `setLoginArgs` to the defined `User::class` class:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;
use GraphQL\Type\Definition\Type;

class User extends GraphQL
{
    public function setLoginArgs(): array
    {
        return [
            'email' => ['name' => 'email', 'type' => Type::string()],
            'password' => ['name' => 'password', 'type' => Type::string()],
            'other_field' => ['other_field' => 'name', 'type' => Type::string()],
        ];
    }
}
```

### Set username for login

The default args for login are `email` and `password`; however, you can change username by defining a method called `setLoginUsernameField` in your pepper class, which corresponds to `User::class` class:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    public function setLoginUsernameField(): string
    {
        return 'username';
    }
}
```

## Register

```graphql
mutation {
  register(
    name: "amirmasoud"
    email: "amirmasoud@pepper.test"
    password: "123456789"
    password_confirmation: "123456789"
  ) {
    token
  }
}
```

Return response would be JWT token if no authorization error were raised.

### Override Register Args

Add `setRegisterArgs` method in Pepper `User` class:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;
use GraphQL\Type\Definition\Type;

class User extends GraphQL
{
    public function setRegisterArgs(): string
    {
        return [
            'name' => ['name' => 'name', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'password' => ['name' => 'password', 'type' => Type::string()],
            'password_confirmation' => ['name' => 'password_confirmation', 'type' => Type::string()],
        ];
    }
}
```

### Override Resolve Method

Add `setRegisterResolve` method in Pepper `User` class. `$args` and `$user` arguments
are available. The return of this method should be a user class instance.

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;
use Illuminate\Support\Facades\Hash;

class User extends GraphQL
{
    public function setRegisterResolve($args, $user)
    {
        return $user::create([
            'name' => $args['name'],
            'email' => $args['email'],
            'password' => Hash::make($args['password']),
        ]);
    }
}
```

### Override Authorize Method

Add `setRegisterAuthorize` method in Pepper `User` class. the return of this method must be boolean.

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    public static function setRegisterAuthorize($root, $args, $ctx, $resolveInfo, $getSelectFields)
    {
        return true;
    }
}
```

### Override Authorization Message

Add `setRegisterAuthorizationMessage` method in Pepper `User` class. the return of this method must be a string.

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    public static function setRegisterAuthorizationMessage()
    {
        return 'Validation error';
    }
}
```

### Override Rules

Add `setRegisterRules` method in Pepper `User` class. the return of this method must be an array.

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    public static function setRegisterRules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'confirmed'],
        ];
    }
}
```

## Forgot Password

Bt passing a registered user's email to the following GraphQL mutation you can send reset link to the user:

```graphql
mutation {
  forgot_password(email: "username@pepper.fake") {
    status
  }
}
```

You can customize the redirect link a user would ultimately recevice via a channel such as email, by setting the `pepper.auth.frontend_url` and also can make further customization to the url by chaning the default value of the `pepper.auth.password_reset` value. A default reset link would look likes as `[defined_FRONTEND_URL_or_fallback_to_APP_URL]/[config_value_of_pepper_auth_password_reset]/?email=EMAIL&token=TOKEN` the query strings of `email` and `token` are filled automatically. A success message would look likes below:

```json
{
  "data": {
    "forgot_password": {
      "status": "We have emailed your password reset link!"
    }
  }
}
```

Or you might run into a error like below, which should be handles accordingly in your front-end application:

```json
{
  "errors": [
    {
      "message": "We can't find a user with that email address.",
      "extensions": {
        "category": "graphql"
      },
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "forgot_password"
      ]
    }
  ],
  "data": {
    "forgot_password": null
  }
}
```

