const express = require("express");
const User = require("../../models/addEmployeeModel");
const keys = require("../../middleware/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load input validations
const validateLoginInput = require("../../validations/login");

// @route GET api/users/login
// $desc Login User / Returning Tokken
// @access Public Route

module.exports = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find the user by Email
  User.findOne({ email }).then((user) => {
    // check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
};