const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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

    IFSC_Code: {
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
