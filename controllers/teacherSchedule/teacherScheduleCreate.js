const TeacherSchedule = require("../../models/teacherScheduleModel");

// Load input validations
const validateRegisterInput = require("../../validations/teacherSchedule");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { branch, teacher } = req.body;
  const teacherSchedule = TeacherSchedule({
    branch,
    teacher, 
  });

  teacherSchedule
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
