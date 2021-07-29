const express = require("express");
const User = require("../../models/addEmployeeModel");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load input validations
const validateRegisterInput = require("../../validations/addEmployee");
module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const {
        firstName,
        lastName,
        email,
        contact,
        password,
        qualification,
        role,
        presentState,
        presentCity,
        presentAddress,
        presentPincode,
        image,
        status,
      } = req.body;
      console.log(req.body);

      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        password: password,
        qualification: qualification,
        role: role,
        presentState: presentState,
        presentCity: presentCity,
        presentAddress: presentAddress,
        presentPincode: presentPincode,
        status: status,
        image: image,
      });
      // console.log(newUser);

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
