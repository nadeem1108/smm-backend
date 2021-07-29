const ClassDB = require("../../models/academicClassModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { branch, name, classNum, sec } = req.body;
const academicClass =  ClassDB({
    branch:branch,
    name:name,
    classNum:classNum,
    sec:sec
});

  academicClass.save(academicClass)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
