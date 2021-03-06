module.exports = (app) => {

  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const save = async (user) => {

    if (!user.name) return { error: 'Nome é um atributo obrigatório!' };
    if (!user.email) return { error: 'E-mail é um atributo obrigatório!' };
    if (!user.passwrd) return { error: 'Senha é um atributo obrigatório!' };

    const userDb = await findAll({ email: user.email });

    if (userDb && userDb.length > 0) return { error: 'Já existe um usuário com este e-mail!' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};
