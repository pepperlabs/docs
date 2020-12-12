---
title: Upload file
description: ''
position: 12
category: Customization
---

For enabling uploading for a field type you need to proceed two steps one in the
Pepper class and one in the model class:

1. Change field type to Upload type in `Pepper` class:

```php
<?php

namespace App\Http\Pepper;

use Pepper\GraphQL;
use Rebing\GraphQL\Support\Facades\GraphQL as ParentGraphQL;
use GraphQL\Type\Definition\Type;

class Post extends GraphQL
{
    public function setCoverType()
    {
        return ParentGraphQL::type('Upload');
    }

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

2. Add attribute mutation to your model to customize uploading behavior. most
basic form of upload functionality is provided below:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'cover',
    ];

    public function setCoverAttribute($file)
    {
        $this->attributes['cover'] = $file->store('posts');
    }
}
```

Test the upload mutation:

```graphql
mutation($cover: Upload!) {
  insert_post(
    objects: {
      cover: $cover,
    }
  ) {
    id
  }
}
```

with `variables` have `cover` attribute. Read more how to upload file on [rebing/graphql-laravel#file-uploads](https://github.com/rebing/graphql-laravel#file-uploads)
