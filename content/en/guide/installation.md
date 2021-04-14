---
title: Installation
description: ''
position: 2
category: Guide
---

You can install using [composer](https://getcomposer.org/) from [Packagist](https://packagist.org/packages/pepperlabs/pepper).

```bash
composer require pepperlabs/pepper
```

Initial the base GraphQL classes:

```bash
php artisan pepper:grind --all
```

Add `pepper` middleware to the GraphQL config (`config/graphql.php`, would be present after running above command) file.

```php
...

    // Any middleware for the graphql route group
    'middleware' => ['pepper'],
    
...
```

Out of the box, any models selected would be available at the GraphQL endpoint.
However, you should make sure that you have defined the return type of your relations in your models in order to make the relations work on the fly.
An example model would look like this:

```php
<?php

namespace Your\App\Models\Namaspace;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Comment extends Model
{
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function likes(): MorphMany
    {
        return $this->morphMany(Like::class, 'likable');
    }
}
```

## Optimization

By enabling caching you can improve execution time:

1. set `pepper.cache.disabled` to `false`
2. set `graphql.lazyload_types` to `true`

## Supported databases

As it uses Laravel Eloquent only, it would support SQLite, MySQL, PostgreSQL, and SQLServer.
