const contacts = require("../components/contacts/network");

const routes = function(server) {
  server.use("/contacts", contacts);
};

module.exports = routes;
