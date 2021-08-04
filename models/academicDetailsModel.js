const mongoose = require("mongoose");

const academicDetailsSchema = new mongoose.Schema({

  studentObjectId:{
    type:String,
  },

  academicYear: {
    type: Date,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
  },
 
  standard: {
    type: String,
  },
  sec: {
    type: String,
  },
  category: {
    type: String,
  },
});

const AcademicDetails = mongoose.model(
  "AcademicDetails",
  academicDetailsSchema
);
module.exports = AcademicDetails;
