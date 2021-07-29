const userDB = require("../../models/addEmployeeModel");
const asyncHandler = require("express-async-handler");
const validateRegisterInput = require("../../validations/updateEmployee");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "data to update can not empty" });
  }
  const id = req.params.id;
  userDB
    .findByIdAndUpdate(id, req.body, { userFindAndModify: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding data of particular id" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error user update information" });
    });
};
