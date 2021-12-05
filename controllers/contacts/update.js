const { NotFound } = require('http-errors');

const contactSchema = require('../../middlewares/validation/contactValidation');

const operations = require('../../model');

const update = async (req, res) => {
  const { id } = req.params;
  const contact = await operations.updateByName(id, req.body);
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

module.exports = update;
