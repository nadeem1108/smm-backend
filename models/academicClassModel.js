const mongoose = require("mongoose");


const classSchema = new mongoose.Schema({

  

  name: {
    type: String,
    required: true,
  },

  classNum: {
    type: String,
  
  },

  sec: {
    type: String,
  },

  
});

const ClassDB = mongoose.model("ClassDB", classSchema);

module.exports = ClassDB;
