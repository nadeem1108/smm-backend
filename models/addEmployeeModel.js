const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADM", "DIR", "EMP", "OFB", "TCR", "SCH"],
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    designation: {
      type: String,
    },
    qualification: {
      type: String,
    },
    experienceDetail: {
      type: String,
    },
    totalExperience: {
      type: String,
    },
    specelization: {
      type: String,
    },

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    contact: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
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
    presentCountry: {
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
    permanentCountry: {
      type: String,
    },
    permanentPincode: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
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

    accountHolderName: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankBranch: {
      type: String,
    },
    branchAddress: {
      type: String,
    },
    IFSC_Code: {
      type: String,
    },
    accountNumber: {
      type: String,
    },

    status: {
      type: String,
    },
  },
  { timestamp: true }
);
const addemployee = mongoose.model("addemployee", userSchema);
module.exports = addemployee;
