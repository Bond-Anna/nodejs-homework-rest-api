const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(contactId, 'contactId');
  const contact = await Contact.findById(contactId);
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
