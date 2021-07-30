const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.className = !isEmpty(data.className) ? data.className : "";
  data.sec = !isEmpty(data.sec) ? data.sec : "";
  data.teacherName = !isEmpty(data.teacherName) ? data.teacherName : "";

  if (Validator.isEmpty(data.className)) {
    errors.className = " Class field is required";
  }

  if (Validator.isEmpty(data.sec)) {
    errors.sec = "sec field is required";
  }

  if (Validator.isEmpty(data.teacherName)) {
    errors.teacherName = "teacher Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
