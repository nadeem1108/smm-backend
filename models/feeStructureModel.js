const mongoose = require("mongoose");

const feeStructureSchema = new mongoose.Schema({
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "StudentDetails",
  },

  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "School",
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
