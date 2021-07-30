const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.cap = !isEmpty(data.cap) ? data.cap : "";  


  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.cap)) {
    errors.cap = "Capacity field is required";
  }


  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
