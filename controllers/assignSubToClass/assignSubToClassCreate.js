const AssignSubToClass = require("../../models/assignSubToClassModel");

// Load input validations
const validateRegisterInput = require("../../validations/assignSubToClass");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { branch, className, sec, subject } = req.body;
  const assignSubToClass = AssignSubToClass({
    branch,
    className,
    sec,
    subject,
  });

  assignSubToClass
    .save()
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
