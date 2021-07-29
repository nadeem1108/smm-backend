const ClassSchedule = require("../../models/classScheduleModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
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
