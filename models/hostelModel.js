const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  studentObjectId:{
    type:String,
    required:true,
  },
  transportRoute: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  hostelName: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
});

const hostel = mongoose.model("hostel", hostelSchema);
module.exports = hostel;
