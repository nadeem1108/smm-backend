const GuardianDetails = require("../../models/guardianDetailModel");

module.exports = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    firstName,
    lastName,
    contact,
    email,
    relation,
    fatherName,
    moterName,
    occupation,
    presentAddress,
    presentCity,
    presentState,
    presentPincode,
    permanentAddress,
    permanentCity,
    permanentState,
    permanentPincode,
  } = req.body;

  const user = new GuardianDetails({
    firstName,
    lastName,
    contact,
    email,
    relation,
    fatherName,
    moterName,
    occupation,
    presentAddress,
    presentCity,
    presentState,
    presentPincode,
    permanentAddress,
    permanentCity,
    permanentState,
    permanentPincode,
  });
  console.log(user);
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
