const UserDB = require("../../models/employAcademicDetailsModel");

// Load input validations
const validateRegisterInput = require("../../validations/employeeAcademicDetails");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
   
    role,
    joiningDate,
    designation,
    qualification,
    experienceDetail,
    totalExperience,
  } = req.body;
  const user = UserDB({
    
    role,
    joiningDate,
    designation,
    qualification,
    experienceDetail,
    totalExperience,
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
