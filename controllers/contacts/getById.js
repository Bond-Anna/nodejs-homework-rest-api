const { NotFound } = require('http-errors');

const operations = require('../../model');

const getById = async (req, res) => {
  console.log(22222222222);

  const { id } = req.params;
  const contact = await operations.getContactById(id);
  if (!contact) {
    throw new NotFound(`Product with id=${id} is not found`);
  }
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result: contact,
    },
  });
};
module.exports = getById;
