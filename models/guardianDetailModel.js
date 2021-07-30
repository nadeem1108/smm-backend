const mongoose = require("mongoose");

const guardianDetailSchema = new mongoose.Schema({
  studentObjectId:{
    type:String,
    required:true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
  },
  relation: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  moterName: {
    type: String,
  },
  occupation: {
    type: String,
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
});

const GuardianDetails = mongoose.model("GuardianDetails", guardianDetailSchema);
module.exports = GuardianDetails;
