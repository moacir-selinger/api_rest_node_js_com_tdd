const app = require('express')();
const consign = require('consign');
const knex = require('knex');
// const knexlogger = require('knex-logger');
const knexfile = require('../knexfile');

// TODO: Criar chaveamento dinâmico.
app.db = knex(knexfile.test);

// app.use(knexlogger(app.db));

consign({ cwd: 'src', verbose: false })
  .include('./config/middleware.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

// HACK: Logger para o banco.
// app.db
//   .on('query', (query) => {
//     console.log({
//       sql: query.sql,
//       bindings: query.bindings ? query.bindings : ''
//     });
//   })
//   .on('query-response', (res) => console.info(res))
//   .on('error', (err) => console.error(err));

module.exports = app;
