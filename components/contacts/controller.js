const store = require("./store");

function addContact(contact) {
  return new Promise((resolve, reject) => {
    if (!contact) {
      console.error("No contact inforamation");
      reject("Invalid information");
      return false;
    }
    store.add(contact);
    resolve(contact);
  });
}

function getContacts(search) {
  return new Promise(resolve => {
    const result = {};
    var contacts = store.list();
    if(search) {
      contacts = contacts.filter(o => Object.entries(o).some(([k, value]) => value.toString().includes(search)));
    }
    result.count = contacts.length;
    result.data = contacts;
  
    resolve(result);
  });
}

module.exports = {
  addContact,
  getContacts,
};
