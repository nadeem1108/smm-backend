const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.teacher = !isEmpty(data.teacher) ? data.teacher : "";

  if (Validator.isEmpty(data.teacher)) {
    errors.teacher = "Teacher field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
