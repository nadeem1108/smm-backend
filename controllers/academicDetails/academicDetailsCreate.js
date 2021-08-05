const userDB = require("../../models/academicDetailsModel");

// Load input validations
const validateRegisterInput = require("../../validations/academicDetails");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    academicYear,
    registrationNumber,
    rollNumber,
    admissionDate,
    standard,
    sec,
    category,
  } = req.body;

  const user = userDB({
    academicYear,
    registrationNumber,
    rollNumber,
    admissionDate,
   
    standard,
    sec,
    category,
  });

  user
    .save(user)
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
