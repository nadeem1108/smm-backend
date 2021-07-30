const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.feeType = !isEmpty(data.feeType) ? data.feeType : "";
  data.feeValue = !isEmpty(data.feeValue) ? data.feeValue : "";
  data.fineType = !isEmpty(data.fineType) ? data.fineType : "";
  data.fineValue = !isEmpty(data.fineValue) ? data.fineValue : "";
  data.lateFeeFrequency = !isEmpty(data.lateFeeFrequency) ? data.lateFeeFrequency : "";
  data.totalAmount = !isEmpty(data.totalAmount) ? data.totalAmount : "";

  if (Validator.isEmpty(data.feeType)) {
    errors.feeType = "fee type field is required";
  }

  if (Validator.isEmpty(data.feeValue)) {
    errors.feeValue = " fee value field is required";
  }

  if (Validator.isEmpty(data.fineType)) {
    errors.fineType = "fine type field is required";
  }

  if (Validator.isEmpty(data.fineValue)) {
    errors.fineValue = "fine value field is required";
  }
  if (Validator.isEmpty(data.lateFeeFrequency)) {
    errors.lateFeeFrequency = "late fee frequency field is required";
  }
  if (Validator.isEmpty(data.totalAmount)) {
    errors.totalAmount = "Total amount field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
