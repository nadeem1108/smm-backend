const mongoose = require("mongoose");

const feeStructureSchema = new mongoose.Schema({
  
  studentObjectId:{
    type:String,
    required:true,
  },

  feeStructure: [
    {
      feeType: {
        type: String,
      },
      feeValue: {
        type: String,
        required: true,
      },
      fineType: {
        type: String,
      },
      fineValue: {
        type: String,
      },
      lateFeeFrequency: {
        type: String,
      },
      totalAmount: {
        type: String,
        required: true,
      },
      status: {
        type: String,
      },
    },
  ],
});
const FeeStructure = mongoose.model("FeeStructure", feeStructureSchema);
module.exports = FeeStructure;
