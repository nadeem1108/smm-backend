const UserDB = require("../../models/employAcademicDetailsModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    branch,
    role,
    joiningDate,
    designation,
    qualification,
    experienceDetail,
    totalExperience,
  } = req.body;
  const user = UserDB({
    branch,
    role,
    joiningDate,
    designation,
    qualification,
    experienceDetail,
    totalExperience,
  });

  user
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
