---
title: Query
description: ''
position: 4
category: API
---

## `query` syntax

```graphql
query [<op-name>] {
  object [([argument])]{
    object-fields
  }
}
```

Example query:

```graphql
query {
  user(
    where: { name: { _eq: "Amirmasoud" } }
  ) {
    id
    name
    created_at
  }
}
```

## `query_by_pk` syntax

Return one model object (if found any) using defined PK defined for model using
[`getKeyName`](https://laravel.com/api/5.8/Illuminate/Database/Eloquent/Model.html#method_getKeyName) which gets `primaryKey` property on the model. It's
usually `id`. The input argument is also limited to this key.

```graphql
query [<op-name>] {
  <query-field-name> (
    column1: value1
  )
  <object-fields>
}
```

Example:

```graphql
query {
  user_by_pk(
    id: 32
  ) {
    name
    email
    created_at
  }
}
```

### Simple Object

Example:

```graphql
query {
  user {
    id
    name
    tags {
      id
      title
    }
    categories_aggregate {
      aggregate {
        count
      }
      nodes {
        title
      }
    }
  }
}
```

## Aggregate object

```graphql
user_aggregate {
  aggregate {
    count
    sum {
      ...aggregateOnThisFields
    }
    avg {
      ...aggregateOnThisFields
    }
    max {
      ...aggregateOnThisFields
    }
    min {
      ...aggregateOnThisFields
    }
  }
  nodes {
    id
    name
    tags {
      title
    }
    categories_aggregate {
      aggregate {
        count
      }
      nodes {
        title
      }
    }
  }
}

fragment aggregateOnThisFields on UserResultAggregateType {
  id
}
```

Available aggregate functions: `min`, `max`, `sum`, `avg` and, `count`.

## Arguments

### Distinct

Example:

```graphql
query {
  user(distinct: true) {
    id
    name
    email
    created_at
  }
}
```

> :warning: For PostgreSQL users: There is no `distinct_on` support at the moment.

## Where

Example:

```graphql
query {
  user(where: {email: {_like: "%example.com"}}) {
    name
    tags {
      title
    }
  }
}
```

### _and

Queries are executed with the `and` operator by default.

Example:

```graphql
query {
  user(
    where: {
      _and: {
        name: { _nlike: "%pattern%" },
        updated_at: { _year: "2020" }
      }
    }
  ) {
    id
    name
    email
    updated_at
  }
}
```

### _or

Example:

```graphql
query {
  user(
    where: {
      _or: {
        name: { _nlike: "%pattern%" },
        updated_at: { _year: "2021" }
      }
    }
  ) {
    id
    name
    email
    updated_at
  }
}
```

### _not

Example:

```graphql
query {
  user(
    where: {
      _not: {
        name: { _nlike: "%pattern%" },
        updated_at: { _year: "2020" }
      }
    }
  ) {
    id
    name
    email
    updated_at
  }
}
```

### Operators

| Operator    | Equivalent       | Note            |
| :---------- | :--------------- | :-------------- |
| `_eq`       | `=`              |                 |
| `_neq`      | `<>`,`!=`        |                 |
| `_gt`       | `>`              |                 |
| `_lt`       | `<`              |                 |
| `_gte`      | `>=`             |                 |
| `_lte`      | `<=`             |                 |
| `_in`       | `IN`             |                 |
| `_nin`      | `NOT IN`         |                 |
| `_like`     | `LIKE`           |                 |
| `_nlike`    | `NOT LIKE`       |                 |
| `_ilike`    | `ILIKE`          | PostgreSQL only |
| `nilike`    | `NOT ILIKE`      | PostgreSQL only |
| `_similar`  | `SIMILAR TO`     |                 |
| `_nsimilar` | `NOT SIMILAR TO` |                 |
| `_is_null`  | `IS NULL`        |                 |

> :warning: JSON operators are not yet supported.

## Order

Example:

```graphql
query {
  user(
    order_by: { id: asc }
  ) {
    id
    name
  }
}
```

Available orders: `asc`, `desc`

## Pagination

Example #1:

```graphql
query {
  user(
    limit: 5
    offset: 10
  ) {
    id
    name
  }
}
```

Example #2:

```graphql
query {
  user(
    take: 5
    skip: 10
  ) {
    id
    name
  }
}
```
