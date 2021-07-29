const userDB = require("../../models/feeStructureModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    school_id,
    student_id,
    feeType,
    feeValue,
    fineType,
    fineValue,
    lateFeeFrequency,
    totalAmount,
    status,
  } = req.body;
  const user = userDB({
    school_id,
    student_id,
    feeType,
    feeValue,
    fineType,
    fineValue,
    lateFeeFrequency,
    totalAmount,
    status,
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
