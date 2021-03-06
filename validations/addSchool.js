const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.schoolName = !isEmpty(data.schoolName) ? data.schoolName : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.schoolName, { min: 3, max: 30 })) {
    errors.schoolName = "First Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.schoolName)) {
    errors.schoolName = " Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
