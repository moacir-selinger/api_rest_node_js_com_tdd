module.exports = {
  test: {
    client: 'pg',
    version: '10',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'FINANCEIRO',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
