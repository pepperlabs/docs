---
title: Basic
description: ''
position: 10
category: Customization
---

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

You can add optional fields or override a field completely, by defining `setOptionalFields` method in your Pepper class for corresponding model in your application. An exampel could be something like below:


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

In this example, we have defined a new `cover_url` property that return the cover value as a string.
