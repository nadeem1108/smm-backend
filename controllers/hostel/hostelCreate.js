const userDB = require("../../models/hostelModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { transportRoute, vehicleNumber, hostelName, roomNumber } = req.body;

  const user = new userDB({
    transportRoute,
    vehicleNumber,
    hostelName,
    roomNumber,
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
