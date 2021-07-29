const mongoose = require("mongoose");


const teacherScheduleSchema = new mongoose.Schema({

  branch: {
    type: String,
    require: true,
  },

  teacher: {
    type: String,
    required: true,
  },

});

const TeacherSchedule = mongoose.model("TeacherSchedule", teacherScheduleSchema);

module.exports = TeacherSchedule;
