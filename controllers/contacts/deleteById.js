const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

// const { operations } = require('../../model');

const deletById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);
  if (!contact) {
    throw new NotFound(`Product with id=${id} is not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result: contact,
    },
  });
};
module.exports = deletById;
