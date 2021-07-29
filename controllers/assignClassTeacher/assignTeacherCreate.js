const AssignTeacher = require("../../models/assignClassTeacher");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { branch, className, sec, teacherName } = req.body;
const assignTeacher =  AssignTeacher({
    branch:branch,
    className:className,
    sec:sec,
    teacherName:teacherName
});

assignTeacher.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
