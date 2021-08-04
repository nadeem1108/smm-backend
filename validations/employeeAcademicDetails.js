const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.role = !isEmpty(data.role) ? data.role : "";
  data.joiningDate = !isEmpty(data.joiningDate) ? data.joiningDate : "";
  data.designation = !isEmpty(data.designation) ? data.designation : "";
  data.qualification = !isEmpty(data.qualification) ? data.qualification : "";
  data.experienceDetail = !isEmpty(data.experienceDetail) ? data.experienceDetail : "";

  

  if (Validator.isEmpty(data.role)) {
    errors.role = "Role field is required";
  }

  if (Validator.isEmpty(data.joiningDate)) {
    errors.joiningDate = "joining Date field is required";
  }

  if (Validator.isEmpty(data.designation)) {
    errors.designation = "Designation field is required";
  }
  if (Validator.isEmpty(data.qualification)) {
    errors.qualification = "Qualification field is required";
  }
  if (Validator.isEmpty(data.experienceDetail)) {
    errors.experienceDetail = "Experience Detail field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
