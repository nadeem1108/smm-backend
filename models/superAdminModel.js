const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique:true
  },
  username: {
    type: String,
    required: true,
    unique:true

  },
  password: {
    type: String,
    required: true,
  },
  
  graAvatar: {
    type: String,
  },
  


},

{ timestamp: true });
const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);
module.exports = SuperAdmin;
