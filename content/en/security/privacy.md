---
title: Privacy
description: ''
position: 9
category: Security
---

## Override Method

By overriding a method with `set[FieldName]Privacy` format in your Pepper class, you can define custom privacy for each field:

```php
public function setEmailPrivacy($args)
{
    return false;
}
```
