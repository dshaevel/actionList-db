// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     '127.0.0.1',
      database: 'dshaevel',
      user:     'dshaevel',
      password: ''
    },
    pool: {
      min: 1,
      max: 1
    },
    seeds: {
      directory: './seeds/development'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  /*
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds/staging'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  */

  /*
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds/production'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  */

};
