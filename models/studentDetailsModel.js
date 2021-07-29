const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  gender: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  motherTongue: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
  },
  presentCity: {
    type: String,
  },
  presentState: {
    type: String,
  },
  presentPincode: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  permanentCity: {
    type: String,
  },
  permanentState: {
    type: String,
  },
  permanentPincode: {
    type: String,
  },
  priviousSchoolName: {
    type: String,
  },
  remarks: {
    type: String,
  },
  emergencyno: {
    type: String,
  },
  image: {
    type: String,
  },
});

const StudentDetails = mongoose.model("StudentDetails", studentDetails);
module.exports = StudentDetails;
