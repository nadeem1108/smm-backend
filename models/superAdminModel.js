const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  presentCity: {
    type: String,
    required: true,
  },
  presentState: {
    type: String,
    required: true,
  },
  presentCountry: {
    type: String,
    required: true,
  },
  presentPincode: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  permanentCity: {
    type: String,
    required: true,
  },
  permanentState: {
    type: String,
    required: true,
  },
  permanentCountry: {
    type: String,
    required: true,
  },
  permanentPincode: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  facebookUrl: {
    type: String,
  },
  twitterUrl: {
    type: String,
  },
  linkdinUrl: {
    type: String,
  },
},
{ timestamp: true });
const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);
module.exports = SuperAdmin;
