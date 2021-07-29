const userDB = require("../../models/superAdminModel");

const addSuperAdmin = async (req, res) => {
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
