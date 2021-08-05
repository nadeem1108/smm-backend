const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (!Validator.isLength(data.firstName, { min: 3, max: 30 })) {
    errors.firstName = "First Name must be between 3 and 30 characters";
  }

  if (!Validator.isLength(data.lastName, { min: 3, max: 30 })) {
    errors.lastName = "Last Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
