const userDB = require("../../models/superAdminModel");

const addSuperAdmin = async (req, res) => {
  const {
    first_name,
    last_name,
    username,
    password,
    status,
    dateOfBirth,
    presentAddress,
    presentCity,
    presentState,
    presentCountry,
    presentPincode,
    permanentAddress,
    permanentCity,
    permanentState,
    permanentCountry,
    permanentPincode,
    logo,
    facebookUrl,
    twitterUrl,
    linkdinUrl,
  } = req.body;

  console.log(req.body);

  if (username && username.length === 0) {
    res.status(400);
    throw new Error("No Data Found");
  } else {
    const superAdmin = userDB({
      first_name,
      last_name,
      username,
      password,
      status,
      dateOfBirth,
      presentAddress,
      presentCity,
      presentState,
      presentCountry,
      presentPincode,
      permanentAddress,
      permanentCity,
      permanentState,
      permanentCountry,
      permanentPincode,
      logo,
      facebookUrl,
      twitterUrl,
      linkdinUrl,
    });

    const createAdmin = await superAdmin.save();
    res.status(201).json(createAdmin);
  }
};

module.exports = addSuperAdmin;
