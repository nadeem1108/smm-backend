const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.classNum = !isEmpty(data.classNum) ? data.classNum : "";
  data.sec = !isEmpty(data.sec) ? data.sec : "";

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = " Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.sec)) {
    errors.sec = "section field is required";
  }

  if (Validator.isEmpty(data.classNum)) {
    errors.classNum = "Class Numeric field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
