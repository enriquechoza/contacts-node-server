const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function(req, res) {
  const search = req.query.search ? req.query.search : false;
  controller
    .getContacts(search)
    .then(contacts => {
      response.success(req, res, contacts, 200);
    })
    .catch(e => response.error(req, res, "Unexpected Error", 500, e));
});

router.post("/", function(req, res) {
  controller
    .addContact(req.body)
    .then(contact => {
      response.success(req, res, {data: contact}, "201");
    })
    .catch(e => {
      response.error(req, res, "Invalid Inforamtion", 400, e);
    });
});

module.exports = router;
