const mongoose = require("mongoose");

const classScheduleSchema = new mongoose.Schema({
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
});

const ClassSchedule = mongoose.model("ClassSchedule", classScheduleSchema);

module.exports = ClassSchedule;
