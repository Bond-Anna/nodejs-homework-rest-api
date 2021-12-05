const { NotFound } = require('http-errors');

const { operations } = require('../../model');

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await operations.getContactById(contactId);
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
module.exports = getById;
