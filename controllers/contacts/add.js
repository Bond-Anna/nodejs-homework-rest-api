const contactSchema = require('../../middlewares/validation/contactValidation');

const operations = require('../../model');

const add = async (req, res) => {
  const newContact = await operations.addContact(req.body);
  res.status(201).json({
    status: 'succes',
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = add;
