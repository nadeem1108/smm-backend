const SectionDB = require("../../models/academicSectionModel");

// Load input validations
const validateRegisterInput = require("../../validations/academicSection");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {  name, cap } = req.body;
  const academicSection = SectionDB({
  
    name: name,
    cap:cap
  });

  academicSection
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
