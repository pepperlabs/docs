---
title: Privacy
description: ''
position: 9
category: Security
---

## Override Method

By overriding a method with `set[FieldName]Privacy` format in your Pepper class, you can define custom privacy for each field:

> You can set custom privacy attributes for every Type's Field. If a field is not allowed, `null` will be returned [rebing/graphql-laravel#privacy](https://github.com/rebing/graphql-laravel#privacy)

```php
public function setEmailPrivacy($args)
{
    return false;
}
```
