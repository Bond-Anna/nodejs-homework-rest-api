const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');
// console.log('contactsPath', contactsPath);

const listContacts = async () => {
  // console.log(111);
  const response = await fs.readFile(contactsPath);
  const contacts = await JSON.parse(response);
  // console.log(contacts);
  return contacts;
};

module.exports = listContacts;
