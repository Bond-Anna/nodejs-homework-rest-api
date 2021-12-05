const { operations } = require('../../model');

const getAll = async (req, res) => {
  const contacts = await operations.listContacts();
  res.json({
    status: 'succsess',
    code: 200,
    data: {
      result: contacts,
    },
  });
};
module.exports = getAll;
