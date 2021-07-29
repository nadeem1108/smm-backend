const ClassSchedule = require("../../models/classScheduleModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    ClassSchedule.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `academic Details may not present with this ${id}`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    ClassSchedule.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
