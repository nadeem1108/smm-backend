const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    employeeObjectId:{
      type:String,
      required:true,
    },

    bankName: {
      type: String,
    },

    accountHolderName: {
      type: String,
    },

    bankBranch: {
      type: String,
    },

    branchAddress: {
      type: String,
    },

    ifscCode: {
      type: String,
    },

    accountNumber: {
      type: Number,
    },
  },
  { timestamp: true }
);
const EmployeeBankDetails = mongoose.model("EmployeeBankDetails", userSchema);
module.exports = EmployeeBankDetails;
