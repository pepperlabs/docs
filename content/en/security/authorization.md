---
title: Authorization
description: ''
position: 7
category: Security
---

## Override Method

For defining authorization for each exposed GraphQL queries and mutation add a method of `set[NameOfOperation]Authorize` to its repective Pepper class:

```php
public function setQueryAuthorize(...$params)
{
    return ! Auth::guest();
}
```

The `...params` consist of `$root`, `array $args`, `$ctx`, `ResolveInfo $resolveInfo = null` and, `Closure $getSelectFields = null`. [Read more about params](https://github.com/rebing/graphql-laravel#authorization)

Available operations are:

- UpdateMutation
- InsertMutation
- DeleteMutation
- UpdateByPkMutation
- DeleteByPkMutation
- InsertOneMutation
- ByPkQuery
- AggregateQuery
- Query

## Override Message

For defining authorization message for each exposed GraphQL queries and mutation, add a method of `set[NameOfOperation]AuthorizationMessage` to its respective Pepper class. The return must be a string:

```php
public function setQueryAuthorizationMessage()
{
    return '(403) Not Authorized';
}
```

Available operations are:

- UpdateMutation
- InsertMutation
- DeleteMutation
- UpdateByPkMutation
- DeleteByPkMutation
- InsertOneMutation
- ByPkQuery
- AggregateQuery
- Query
