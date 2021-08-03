const mongoose = require("mongoose");

const employeeAcademicSchema = new mongoose.Schema(
  {
  
    employeeObjectId:{
      type:String,
    },
    
    role: {
      type: String,
      enum: ["ADM", "DIR", "EMP", "OFB", "TCR", "SCH"],
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    designation: {
      type: String,
    },
    qualification: {
      type: String,
    },
    experienceDetail: {
      type: String,
    },
    totalExperience: {
      type: String,
    },
  },
  { timestamp: true }
);
const EmployeeAcademicDetail = mongoose.model(
  "EmployeeAcademicDetail",
  employeeAcademicSchema
);
module.exports = EmployeeAcademicDetail;
