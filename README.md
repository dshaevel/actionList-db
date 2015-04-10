# Action List Database (actionList-db) - v0.0.1 - David Shaevel
### 4/10/2015

---

#Description

Set up the Action List database and manage database migrations.

---

#Usage

Install the dependencies

    npm install

Run the database migration

    knex migrate:latest

Seed the database with test data

    knex seed:run