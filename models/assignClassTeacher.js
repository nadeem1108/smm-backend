const mongoose = require("mongoose");

const assignTeacheerSchema = new mongoose.Schema({
  employeeObjectId:{
    type:String,
    required:true,
  },
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

  teacherName: {
    type: String,
    require: true,
  },
});

const AssignTeacher = mongoose.model("AssignTeacher", assignTeacheerSchema);

module.exports = AssignTeacher;
