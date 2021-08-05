const GuardianDetails = require("../../models/guardianDetailModel");

// Load input validations
const validateRegisterInput = require("../../validations/gaurdianDetail");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {
    studentObjectId,
    firstName,
    lastName,
    contact,
    email,
    relation,
    fatherName,
    moterName,
    occupation,
    presentAddress,
    permanentAddress,
  } = req.body;

  const user = new GuardianDetails({
    studentObjectId,
    firstName,
    lastName,
    contact,
    email,
    relation,
    fatherName,
    moterName,
    occupation,
    presentAddress,
    permanentAddress,
  });
  console.log(user);
  user
    .save(user)
    .then((data) => {
      res.status(201).json({
        msg: "Data added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
