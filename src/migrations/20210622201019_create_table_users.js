// Criar migration => node_modules /.bin / knex migrate: make create_users--env test
// Migrar tudo => node_modules/.bin/knex migrate:latest --env test
// Voltar migration => node_modules/.bin/knex migrate:rollback --env test

exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.string('email').notNull().unique();
    t.string('passwrd').notNull();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
