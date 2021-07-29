const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({ 

  branch: {
    type: String,
    require: true,
  },

  subjectName: {
    type: String,
    required: true,
  },

  subjectCode: {
    type: String,
  },

  subjectAuthor: {
    type: String,
  },

  subjectType: {
    type: String,
  },

});

const SubjectDB = mongoose.model("SubjectDB", subjectSchema);

module.exports = SubjectDB;
