const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique:true
    },

    userName: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["MALE","FEMALE","OTHER"]
    },
    dateOfBirth: {
      type: String,
    },

    religion: {
      type: String,
    },

    bloodGroup: {
      type: String,
    },
    
    presentAddress: {
      type: String,
    },

  
    permanentAddress: {
      type: String,
    },

    profilePicture: {
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

    status: {
      type: String,
    },
  },
  { timestamp: true }
);
const Addemployee = mongoose.model("Addemployee", userSchema);
module.exports = Addemployee;
