const SectionDB = require("../../models/academicSectionModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { branch, name, cap } = req.body;
  const academicSection = SectionDB({
    branch: branch,
    name: name,
    cap:cap
  });

  academicSection
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
