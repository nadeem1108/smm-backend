const userDB = require("../../models/academicDetailsModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    academicYear,
    registrationNumber,
    rollNumber,
    admissionDate,
    branch,
    standard,
    sec,
    category,
  } = req.body;

  const user = userDB({
    academicYear,
    registrationNumber,
    rollNumber,
    admissionDate,
    branch,
    standard,
    sec,
    category,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
