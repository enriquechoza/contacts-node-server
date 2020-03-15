const contacts = require("../../data");

function addContact(contact) {
  contacts.push(contact);
}

function getContacts() {
  return contacts;
}

module.exports = {
  add: addContact,
  list: getContacts
};
