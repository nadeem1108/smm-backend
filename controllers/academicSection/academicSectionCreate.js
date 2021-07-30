const SectionDB = require("../../models/academicSectionModel");

// Load input validations
const validateRegisterInput = require("../../validations/academicSection");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { branch, name, cap } = req.body;
  const academicSection = SectionDB({
    branch: branch,
    name: name,
    cap:cap
  });

  academicSection
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
