// Update with your config settings.
const {password} = require('./.env')


module.exports = {

    client: 'pg',
    connection: {
      database: 'graphql01',
      user:     'postgres',
      password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
