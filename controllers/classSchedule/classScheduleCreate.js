const ClassSchedule = require("../../models/classScheduleModel");

// Load input validations
const validateRegisterInput = require("../../validations/classSchedule");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { branch, className, sec } = req.body;
  const classSchedule = ClassSchedule({
    branch,
    className,
    sec,
    
  });

  classSchedule
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
