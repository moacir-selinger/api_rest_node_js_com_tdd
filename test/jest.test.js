test('Principais assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();

  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeLessThan(11);
});

test('Trabalhar com objetos', () => {
  const obj = { name: 'Jhon', email: 'jhon@mail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Jhon');
  expect(obj.name).toBe('Jhon');
});
