const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const updatedContacts = require('./updateContacts');

const updateById = async (contactId, name, email, phone) => {
  const allContacts = await listContacts();
  const idx = allContacts.findIndex(cont => cont.id === contactId);
  if (idx === -1) {
    return null;
  }
  allContacts[idx] = { id: v4(), name, email, phone };
  await updatedContacts(allContacts);
  return allContacts[idx];
};

module.exports = updateById;
