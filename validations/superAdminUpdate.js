const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
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
