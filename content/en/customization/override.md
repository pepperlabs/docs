---
title: Override
description: ''
position: 10
category: Customization
---

## Aggregation

### Override `count` method

In your pepper class, add the following method. the return type must be integer.

```php
public function resolveCountAggregate($root, $args, $context, $resolveInfo): int
{
    // override calculation of the count
}
```

### Override `avg` method

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveAvgAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the avg
}
```

### Override `sum` method

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveSumAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the sum
}
```

### Override `max` method

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveMaxAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the max
}
```

### Override `min` method

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveMinAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the min
}
```

## General

### Override `description`

Create a new method called `set[operation]Description` and return a string to override description. available `operations` are:

- ResultAggregateType
- FieldAggregateUnresolvableType
- FieldAggregateType
- AggregateType
- Type
- UpdateMutation
- InsertMutation
- DeleteMutation
- UpdateByPkMutation
- DeleteByPkMutation
- InsertOneMutation
- ByPkQuery
- AggregateQuery
- Query
- MutationInput
- OrderInput
- Input

```php
public function setQueryDescription()
{
    return 'new desription';
}
```

## Authentication

### Customizing Authentication

[Table of contents](#table-of-contents)

1. set `pepper.auth.disabled` to `false` in order to enable authentication.
2. There should be a pepper class correspond to your defined user model. for
example if you have defined `App\Models\User::class` as your user model, you
must have `App\Pepper\User::class` class.

### Login

```graphql
{
  login(
    email: "amirmasoud@pepper.test"
    password: "12345678"
  ) {
    token
  }
}
```

return response would be JWT token if login credentials are valid, otherwise it would be authorization error.

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

The default args for login are `email` and `password`, however, you can change
username by defining a method called `setLoginUsernameField` in your pepper
class which corresponds to `User::class` class:

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

### Register

```graphql
mutation {
  register(
    name: "amirmasoud"
    email: "amirmasoud@pepper.test"
    password: "12345678"
    password_confirmation: "12345678"
  ) {
    token
  }
}
```

Return response would be JWT token if no authorization error had been raised.

### Override register args

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

### Override resolve method

Add `setRegisterResolve` method in Pepper `User` class. `$args` and `$user` arguments
are available. the return of this method should be user class instance.

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

### Override authorize method

Add `setRegisterAuthorize` method in Pepper `User` class. the return of this
method must be boolean.

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

### Override authorization message method

Add `setRegisterAuthorizationMessage` method in Pepper `User` class. the return
of this method must be string.

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

### Override rules method

Add `setRegisterRules` method in Pepper `User` class. the return of this method
must be array.

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
