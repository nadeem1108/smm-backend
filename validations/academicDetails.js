const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.academicYear = !isEmpty(data.academicYear) ? data.academicYear : "";
  data.registrationNumber = !isEmpty(data.email) ? data.email : "";
  data.rollNumber = !isEmpty(data.rollNumber) ? data.rollNumber : "";
  data.admissionDate = !isEmpty(data.admissionDate) ? data.admissionDate : "";
  data.branch = !isEmpty(data.branch) ? data.branch : "";
  data.standard = !isEmpty(data.standard) ? data.standard : "";

  data.category = !isEmpty(data.category) ? data.category : "";

  if (Validator.isEmpty(data.academicYear)) {
    errors.academicYear = "Academic Year field is required";
  }

  if (Validator.isEmpty(data.rollNumber)) {
    errors.rollNumber = "Roll Number field is required";
  }

  if (Validator.isEmpty(data.rollNumber)) {
    errors.registrationNumber = "Registration Number field is required";
  }

  if (Validator.isEmpty(data.admissionDate)) {
    errors.admissionDate = "Admission Date field is required";
  }

  if (Validator.isEmpty(data.branch)) {
    errors.branch = "Branch field is required";
  }

  if (Validator.isEmpty(data.standard)) {
    errors.standard = "Standard field is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
