const userDB = require("../../models/addEmployeeModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    userDB
      .findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(400)
            .send({ message: `Teacher  may not present with this ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    userDB
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
