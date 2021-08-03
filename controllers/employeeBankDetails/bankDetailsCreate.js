const UserDB = require("../../models/employeeBankDetailsModel");

// Load input validations
const validateRegisterInput = require("../../validations/employeeBankDetails");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    bankName,
    accountHolderName,
    bankBranch,
    branchAddress,
    ifscCode,
    accountNumber,
  } = req.body;
  const user = UserDB({
    bankName,
    accountHolderName,
    bankBranch,
    branchAddress,
    ifscCode,
    accountNumber,
  });

  user
    .save()
    .then((data) => {
      res.status(201).json({
        msg:"Data added Sucessfully", 
        data:data
    })})
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
