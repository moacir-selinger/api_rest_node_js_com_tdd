module.exports = (app) => {

  const findAll = (req, res) => {
    app.services.account.findAll()
      .select()
      .then((response) => res.status(200).json(response));
  };

  const create = (req, res) => {
    app.services.account.save(req.body).then((result) => {
      return res.status(201).json(result[0]);
    });
  };

  return { create, findAll };
};
