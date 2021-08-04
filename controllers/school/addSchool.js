const bcrypt = require("bcryptjs");
const schoolDB = require("../../models/adminSchoolModel");
const validateRegisterInput = require("../../validations/addSchool");

module.exports = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const newUser = new schoolDB({
        
        schoolName: req.body.schoolName,
        contact: req.body.contact,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        password2: req.body.password2,
        fullAddress: req.body.fullAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        status: req.body.status,
        logo: req.body.logo,
      });
      console.log(newUser);

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((data) => {
              res.status(201).json({
                msg: "Data added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
