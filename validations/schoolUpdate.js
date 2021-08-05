const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.schoolName = !isEmpty(data.schoolName) ? data.schoolName : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (!Validator.isLength(data.schoolName, { min: 3, max: 30 })) {
    errors.schoolName = " Name must be between 3 and 30 characters";
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

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
