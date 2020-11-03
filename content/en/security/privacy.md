---
title: Privacy
description: ''
position: 9
category: Security
---

## Override Method

You can define privacy for individual fields as follow, `set[FieldName]Privacy` in Pepper class for each model:

```php
public function setEmailPrivacy($args)
{
    return false;
}
```