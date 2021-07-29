const AssignSubToClass = require("../../models/assignSubToClassModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};