const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({

  branch: {
    type: String,
    require: true
  },

  name: {
    type: String,
    required: true
  },
  cap:{
type:Number
  }

});

const SectionDB = mongoose.model("SectionDB", sectionSchema);

module.exports = SectionDB;
