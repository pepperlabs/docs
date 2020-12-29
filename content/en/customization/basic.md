---
title: Basic
description: ''
position: 10
category: Customization
---

## Covered fields

You can define a list of covered fields for your model GraphQL endpoint. It will expose everything except those which are defined to be covered:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    protected $covered = [
        'password',
    ];
}
```

## Exposed fields

You can define a list of exposed fields for your model GraphQL endpoint. It will not allow any other field to be exposed except those which are defined:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;

class User extends GraphQL
{
    protected $exposed = [
        'id',
        'name',
        'email',
    ];
}
```

## Override `description`

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

## Add Optional Fields

You can add optional fields or override a field completely by defining `setOptionalFields` method in your Pepper class for a corresponding model in your application. An example could be something like below:


```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;
use GraphQL\Type\Definition\Type;

class Post extends GraphQL
{
    public function setOptionalFields()
    {
        return [
            'cover_url' => [
                'type' => Type::string(),
                'selectable' => false,
                'resolve' => function ($root) {
                    $root->refresh();
                    return $root->cover;
                }
            ]
        ];
    }
}

```

In this example, we have defined a new `cover_url` property that returns the cover value as a string.
