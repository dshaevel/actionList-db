# Action List Database (actionList-db) - v0.0.1 - David Shaevel
### 4/10/2015

---

#Description

Set up the Action List database and manage database migrations using Knex.js.

- [Knex.js](http://knexjs.org)

---

#Usage

Install local PostgreSQL server

- [Postgres.app](http://postgresapp.com)

Install the dependencies

    npm install

Install knex globally

    npm install knex -g

Edit the development and staging database configuration settings in knexfile.js

    ...
    ...
    development: {
      client: 'postgresql',
      connection: {
        host:     '127.0.0.1',
        database: '', /* Enter local database name here */
        user:     '', /* Enter local db user here */
        password: ''  /* Enter local db password here */
      },
    ...
    ...
    staging: {
      client: 'postgresql',
      connection: {
        host:     '', /* Enter remote staging database host here */
        database: '', /* Enter remote staging database name here */
        user:     '', /* Enter remote staging db user here */
        password: ''  /* Enter remote staging db password here */
      },
    ...
    ...

Run the database migration

    knex migrate:latest

Seed the database with test data

    knex seed:run