const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  img: {
    type: String,
   
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  status:{
    type:Boolean,
    required:true,
  },
  
});
const notification = mongoose.model("notification", notificationSchema);
module.exports = notification;