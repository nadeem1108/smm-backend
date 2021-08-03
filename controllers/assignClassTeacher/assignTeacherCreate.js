const AssignTeacher = require("../../models/assignClassTeacher");

// Load input validations
const validateRegisterInput = require("../../validations/assignClassTeacher");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { branch, className, sec, teacherName } = req.body;
  const assignTeacher = AssignTeacher({
    branch: branch,
    className: className,
    sec: sec,
    teacherName: teacherName,
  });

  assignTeacher
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
