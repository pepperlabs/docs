---
title: Authentication
description: ''
position: 8
category: Security
---

## Enable Auth

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
    'disabled' => false,

    ...
],
```
