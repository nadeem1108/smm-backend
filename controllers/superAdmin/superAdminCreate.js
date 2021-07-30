const userDB = require("../../models/superAdminModel");
// Load input validations
const validateRegisterInput = require("../../validations/superAdmin");

const addSuperAdmin = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
// Check Validation
if (!isValid) {
  return res.status(400).json(errors);
}
  const { name, username, password, email, graAvatar } = req.body;

  console.log(req.body);

  if (username && username.length === 0) {
    res.status(400);
    throw new Error("No Data Found");
  } else {
    const superAdmin = userDB({
      name,
      username,
      password,
      email,
      graAvatar,
    });

    const createAdmin = await superAdmin.save();
    res.status(201).json(createAdmin);
  }
};

module.exports = addSuperAdmin;
