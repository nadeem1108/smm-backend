const SubjectDB = require("../../models/subjectModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { branch, subjectName, subjectCode, subjectAuthor, subjectType } =
    req.body;
  const subject = SubjectDB({
    branch,
    subjectName,
    subjectCode,
    subjectAuthor,
    subjectType,
  });

  subject
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
