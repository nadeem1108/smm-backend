const AssignTeacher = require("../../models/assignClassTeacher");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "data to update can not empty" });
  }
  const id = req.params.id;
  AssignTeacher
    .findByIdAndUpdate(id, req.body, { userFindAndModify: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding data of particular id" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error user update information" });
    });
};
