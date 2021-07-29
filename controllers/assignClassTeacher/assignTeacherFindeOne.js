const AssignTeacher = require("../../models/assignClassTeacher");
module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    AssignTeacher
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Academic Details  may not present with this ${id}`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    AssignTeacher
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
