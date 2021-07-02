const request = require('supertest');

const app = require('../../src/app');

const email = `${Date.now()}@mail.com`;

test('Deve listar todos os usuários.', () => {
  return request(app).get('/users').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

test('Deve inserir um usuário com sucesso.', () => {
  return request(app).post('/users')
    .send({ name: 'Moacir Fernandes', email, passwrd: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Moacir Fernandes');
    });
});

// PREFERIDA => Retorna a promise para que o jest gerencie a fialização.
test('Não deve inserir usuário sem nome.', () => {
  return request(app)
    .post('/users')
    .send({ email: 'momo@mail.com', passwrd: '123456' })
    .then(((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome é um atributo obrigatório!');
    }));
});

// Foi gerenciado o async manualmente para gerenciar a promise.
test('Não deve inserir usuário sem e-mail.', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'Walter Mitty', passwrd: '123456' });

  expect(result.status).toBe(400);
  expect(result.body.error).toBe('E-mail é um atributo obrigatório!');
});

// Encerrando o processo de teste manualmente.
test('Não deve inserir usuário sem senha.', (done) => {
  request(app).post('/users')
    .send({ name: 'Walter Mitty', email: 'walter@mail.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é um atributo obrigatório!');
      done();
    })
    .catch((err) => done.fail(err));
});

test('Não deve inserir usuário com e-mail existente!', () => {
  return request(app).post('/users')
    .send({ name: 'Moacir Fernandes', email, passwrd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Já existe um usuário com este e-mail!');
    });
});
