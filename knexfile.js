// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     '127.0.0.1',
      database: '', /* Enter local database name here */
      user:     '', /* Enter local db user here */
      password: ''  /* Enter local db password here */
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
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:     '', /* Enter remote staging database host here */
      database: '', /* Enter remote staging database name here */
      user:     '', /* Enter remote staging db user here */
      password: ''  /* Enter remote staging db password here */
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

};
