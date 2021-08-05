const TeacherSchedule = require("../../models/teacherScheduleModel");

// Load input validations
const validateRegisterInput = require("../../validations/teacherSchedule");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { employeeObjectId, className, sec, teacher } = req.body;
  const teacherSchedule = TeacherSchedule({
    employeeObjectId,
    className,
    sec,
    teacher,
  });

  teacherSchedule
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
