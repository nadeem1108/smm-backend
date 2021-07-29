const mongoose = require("mongoose");

const classAssignSchema = new mongoose.Schema({ 

  branch: {
    type: String,
    require: true,
  },

  className: {
    type: String,
    required: true,
  },

  sec: {
    type: String,
  },

  subject: {
    type: String,
  },

});

const AssignSubToClass = mongoose.model("AssignSubToClass", classAssignSchema);

module.exports = AssignSubToClass;
