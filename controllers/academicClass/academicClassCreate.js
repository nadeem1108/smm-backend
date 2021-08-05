const ClassDB = require("../../models/academicClassModel");

// Load input validations
const validateRegisterInput = require("../../validations/addAcademicClass");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { name, classNum, sec } = req.body;
  const academicClass = ClassDB({
    name,
    classNum,
    sec,
  });

  academicClass
    .save(academicClass)
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
