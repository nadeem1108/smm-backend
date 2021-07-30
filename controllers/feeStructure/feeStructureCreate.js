const userDB = require("../../models/feeStructureModel");

// Load input validations
const validateRegisterInput = require("../../validations/feeStructure");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {
    school_id,
    student_id,
    feeType,
    feeValue,
    fineType,
    fineValue,
    lateFeeFrequency,
    totalAmount,
    status,
  } = req.body;
  const user = userDB({
    school_id,
    student_id,
    feeType,
    feeValue,
    fineType,
    fineValue,
    lateFeeFrequency,
    totalAmount,
    status,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
