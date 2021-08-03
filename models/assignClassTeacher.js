const mongoose = require("mongoose");

const assignTeacheerSchema = new mongoose.Schema({
  employeeObjectId:{
    type:String,
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
