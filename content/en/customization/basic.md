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
