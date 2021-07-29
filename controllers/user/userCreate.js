var userDB = require("../../models/adminSchoolModel");
module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    name,
    email,
    contact,
    status,
    password,
    logo,
    country,
    pincode,
    state,
    fulladdress,
    city,
  } = req.body;
  const user = userDB({
    name: name,
    email: email,
    contact: contact,
    status: status,

    password: password,
    logo: logo,
    country: country,
    pincode: pincode,
    city: city,
    state: state,
    fulladdress: fulladdress,
  });
  // console.log(user);
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
