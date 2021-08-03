const userDB = require("../../models/hostelModel");

// Load input validations
const validateRegisterInput = require("../../validations/hostel");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
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
      res.status(201).json({
        msg:"Data added Sucessfully", 
        data:data
    })})
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
