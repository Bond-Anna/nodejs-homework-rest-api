const { NotFound } = require('http-errors');

const { operations } = require('../../model');

const update = async (req, res) => {
  const { contactId } = req.params;
  const contact = await operations.updateById(contactId, req.body);
  if (!contact) {
    throw new NotFound(`Product with id=${contactId} is not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = update;
