const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () => {
  const res = await app.services.user.save({
    name: 'Marco Pollo',
    email: `${Date.now()}@mail.com`,
    passwrd: '123456',
  });
  user = { ...res[0] };
});

test('Deve inserir uma conta com sucesso.', () => {
  return request(app).post(MAIN_ROUTE)
    .send({ name: `Acc #${user.id}`, id_user: user.id })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe(`Acc #${user.id}`);
    });
});

test('Deve listar todas as contas.', () => {
  return app.db('accounts')
    .insert({ name: `Act #${user.id}` })
    .then(() => request(app).get(MAIN_ROUTE))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});
