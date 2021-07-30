const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.bankName = !isEmpty(data.bankName) ? data.bankName : "";
  data.accountHolderName = !isEmpty(data.accountHolderName) ? data.accountHolderName : "";
  data.bankBranch = !isEmpty(data.bankBranch) ? data.bankBranch : "";
  data.branchAddress = !isEmpty(data.branchAddress) ? data.branchAddress : "";
  data.ifscCode = !isEmpty(data.ifscCode) ? data.ifscCode : "";
  data.accountNumber = !isEmpty(data.accountNumber) ? data.accountNumber : "";

  if (Validator.isEmpty(data.bankName)) {
    errors.bankName = "Bank Name field is required";
  }

  if (Validator.isEmpty(data.accountHolderName)) {
    errors.accountHolderName = " Account holder name field is required";
  }

  if (Validator.isEmpty(data.bankBranch)) {
    errors.bankBranch = "Bank branch field is required";
  }

  if (Validator.isEmpty(data.branchAddress)) {
    errors.branchAddress = "Branch address field is required";
  }
  if (Validator.isEmpty(data.ifscCode)) {
    errors.ifscCode = "IFSC Code field is required";
  }
  if (Validator.isEmpty(data.accountNumber)) {
    errors.accountNumber = "Account Number field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
