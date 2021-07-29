const TeacherSchedule = require("../../models/teacherScheduleModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
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
