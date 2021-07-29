const express = require("express");
const User = require("../../models/addEmployeeModel");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load input validations
const validateRegisterInput = require("../../validations/register");
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
      const newUser = new userDB({
        branch: req.body.branch,
        role: req.body.role,
        joiningDate: req.body.joiningDate,
        designation: req.body.designation,
        qualification: req.body.qualification,
        experienceDetail: req.body.experienceDetail,
        totalExperience: req.body.totalExperience,
        specelization: req.body.specelization,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        contact: req.body.contact,
        email: req.body.email,
        presentAddress: req.body.presentAddress,
        presentCity: req.body.presentCity,
        presentState: req.body.presentState,
        presentCountry: req.body.presentCountry,
        presentPincode: req.body.presentPincode,
        permanentAddress: req.body.permanentAddress,
        permanentCity: req.body.permanentCity,
        permanentState: req.body.permanentState,
        permanentCountry: req.body.permanentCountry,
        permanentPincode: req.body.permanentPincode,
        profilePicture: req.body.profilePicture,
        username: req.body.username,
        password: req.body.password,
        password2: req.body.password2,
        facebookUrl: req.body.facebookUrl,
        twitterUrl: req.body.twitterUrl,
        linkdinUrl: req.body.linkdinUrl,
        accountHolderName: req.body.accountHolderName,
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch,
        branchAddress: req.body.branchAddress,
        IFSC_Code: req.body.IFSC_Code,
        accountNumber: req.body.accountNumber,
        status: req.body.status,
      });
      console.log(newUser);

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
