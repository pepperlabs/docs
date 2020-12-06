---
title: Aggregation
description: ''
position: 11
category: Customization
---

## Override `count`

By overriding the count method, you can define how it should count the query:

```php
public function resolveCountAggregate($root, $args, $context, $resolveInfo): int
{
    // override calculation of the count
}
```

## Override `avg`

By overriding the `avg` method, you can define how it should average the query:

```php
public function resolveAvgAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the avg
}
```

## Override `sum`

By overriding the `sum` method, you can define how it should sum the query:

```php
public function resolveSumAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the sum
}
```

## Override `max`

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveMaxAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the max
}
```

## Override `min`

In your pepper class, add the following method. The return type must be an array.

```php
public function resolveMinAggregate($root, $args, $context, $resolveInfo): array
{
    // override calculation of the min
}
```
