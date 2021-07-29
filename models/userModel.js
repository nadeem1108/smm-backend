const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 8,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ["ADM", "EMP", "SCH", "STU", "TEC"],
    required: true,
    default: "student",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
