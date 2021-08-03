const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  schoolId: {
    type: String,
  },
  branchName: {
    type: String,
  },
  schoolName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  fullAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
  logo: {
    type: String,
  },
});
const School = mongoose.model("School", schoolSchema);
module.exports = School;
