const SectionDB = require("../../models/academicSectionModel");

// Load input validations
const validateRegisterInput = require("../../validations/academicSection");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  SectionDB
    .findByIdAndUpdate(id, req.body, { userFindAndModify: false })
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
