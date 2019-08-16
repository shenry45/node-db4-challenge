// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
      extensions: 'js'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  }

};
