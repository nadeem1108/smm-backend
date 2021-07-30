const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.relation = !isEmpty(data.relation) ? data.relation : "";
  data.occupation = !isEmpty(data.occupation) ? data.occupation : "";
 

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = " Last Name field is required";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact field is required";
  }

  if (Validator.isEmpty(data.relation)) {
    errors.relation = "relation field is required";
  }
  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = "occupation field is required";
  }
  

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
