const userDB = require("../../models/studentDetailsModel");
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../../validations/addStudent");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    console.log(req.body);
    if (user) {
      return res.status(400).json(errors);
    } else {
      const newUser = new userDB({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        dateOfBirth: req.body.dateOfBirth,
        motherTongue: req.body.motherTongue,
        contact: req.body.contact,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        password2: req.body.password2,
        presentAddress: req.body.presentAddress,
        
        permanentAddress: req.body.permanentAddress,
       
        priviousSchoolName: req.body.priviousSchoolName,
        remarks: req.body.remarks,
        emergencyno: req.body.emergencyno,
        image: req.body.image,
      });
      console.log(newUser);

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
