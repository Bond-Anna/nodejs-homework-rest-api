const operations = require('../../model');
// console.log(operations);

const getAll = async (req, res) => {
  console.log('1111111111111111111');

  const contacts = await operations.listContacts();
  res.json({
    status: 'succses',
    code: 200,
    data: {
      result: contacts,
    },
  });
};
module.exports = getAll;
