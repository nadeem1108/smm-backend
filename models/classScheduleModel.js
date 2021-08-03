const mongoose = require("mongoose");

const classScheduleSchema = new mongoose.Schema({
 

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
