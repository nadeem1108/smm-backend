const SubjectDB = require("../../models/subjectModel");

// Load input validations
const validateRegisterInput = require("../../validations/subject");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { subjectName, subjectCode, subjectAuthor, subjectType } =
    req.body;
  const subject = SubjectDB({
   
    subjectName,
    subjectCode,
    subjectAuthor,
    subjectType,
  });

  subject
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
