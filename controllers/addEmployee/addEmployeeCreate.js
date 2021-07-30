const express = require("express");
const Addemployee = require("../../models/addEmployeeModel");
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

  Addemployee.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const {
        name,
        contact,
        email,
        userName,
        password,
        password2,
        gender,
        religion,
        profilePicture,
        dateOfBirth,
        presentAddress,
        permanentAddress,
        facebookUrl,
        twitterUrl,
        linkdinUrl,
        status,
      } = req.body;
      console.log(req.body);

      const newUser = new Addemployee({
        name,
        contact,
        email,
        userName,
        password,
        password2,
        gender,
        religion,
        profilePicture,
        dateOfBirth,
        presentAddress,
        permanentAddress,
        facebookUrl,
        twitterUrl,
        linkdinUrl,
        status,
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
