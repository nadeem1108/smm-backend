const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.subjectName = !isEmpty(data.subjectName) ? data.subjectName : "";
 

  if (Validator.isEmpty(data.subjectName)) {
    errors.subjectName = "Subject name field is required";
  }



  return {
    errors,
    isValid: isEmpty(errors),
  };
};
