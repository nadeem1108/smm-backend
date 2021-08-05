const mongoose = require("mongoose");

const teacherScheduleSchema = new mongoose.Schema({
  employeeObjectId:{
    type:String,
  },
  className:{
    type:String,
  },
  sec:{
    type:String,
  },

  teacher: {
    type: String,
    required: true,
  },
});

const TeacherSchedule = mongoose.model(
  "TeacherSchedule",
  teacherScheduleSchema
);

module.exports = TeacherSchedule;
