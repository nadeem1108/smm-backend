const mongoose = require("mongoose");

const guardianDetailSchema = new mongoose.Schema({
  studentObjectId: {
    type: String,
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
  permanentAddress: {
    type: String,
  },
});

const GuardianDetails = mongoose.model("GuardianDetails", guardianDetailSchema);
module.exports = GuardianDetails;
