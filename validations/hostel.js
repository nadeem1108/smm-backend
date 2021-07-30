const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.vehicleNumber = !isEmpty(data.vehicleNumber) ? data.vehicleNumber : "";
  data.hostelName = !isEmpty(data.hostelName) ? data.hostelName : "";
  data.roomNumber = !isEmpty(data.roomNumber) ? data.roomNumber : "";


  if (Validator.isEmpty(data.vehicleNumber)) {
    errors.vehicleNumber = "vehicle Number field is required";
  }

  if (Validator.isEmpty(data.hostelName)) {
    errors.hostelName = "Hostel Name field is required";
  }

  if (Validator.isEmpty(data.roomNumber)) {
    errors.roomNumber = "Room No. field is required";
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
