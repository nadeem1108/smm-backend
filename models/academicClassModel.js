const mongoose = require("mongoose");


const classSchema = new mongoose.Schema({

  branch: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    required: true,
  },

  classNum: {
    type: String,
    require: true,
  },

  sec: {
    type: String,
  },

  
});

const ClassDB = mongoose.model("ClassDB", classSchema);

module.exports = ClassDB;
