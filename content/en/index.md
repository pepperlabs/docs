---
title: Introduction
description: ''
position: 1
category: ''
features:
  - Customizable validation, authentication, and authorization
  - Optional JWT support for protecting routes
  - Support all Laravel Eloquent databases (SQLite, MySQL, PostgreSQL, SQLServer)
---

## About Pepper

Pepper is an automatic GraphQL exposing Laravel package. It uses your application models to auto define properties and relations. It supports Queries and Mutations out of the box. Pepper offers features such as:

<list :items="features"></list>

## Version support

PHP: 7.3 or higher

Laravel: 7 or higher

## Background

The idea of this Laravel package has come from [Hasura](https://hasura.io/), an open-source project which only supports the PostgreSQL database, but Pepper supports MySQL, PostgreSQL, SQLite, and SQLServer. Although most of the query and mutation structure are similar, there are some differences in them that you should be careful if you are migrating from Hasura.

## Open-source Projects

Pepper is thankful to all the contributors to the following packages and applications, as they have been a great help to develop this package.

* [Hasura](https://hasura.io/)
* [rebing/graphql-laravel](https://github.com/rebing/graphql-laravel)

## Roadmap

* ~~JWT Authentication~~
* Reset password
* 2 factor authentication
* ~~Validations~~
* ~~Authorization~~
* File upload
* JSON type support
* GIS support
* MySQL/PostgreSQL/SQLServer/SQLite custom fields support
* Subscription support
* Automatic result cache
* ReactAdmin support
* Route hashing
* Compatibility with Laravel Octane

## Security Vulnerabilities

If you discover a security vulnerability within Pepper, please send an e-mail to Amirmasoud Sheydaei via [amirmasoud.sheydaei@gmail.com](mailto:amirmasoud.sheydaei@gmail.com). All security vulnerabilities will be promptly addressed.

## License

The Pepper is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
