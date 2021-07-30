const UserDB = require("../../models/employeeBankDetailsModel");

module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    bankName,
    accountHolderName,
    bankBranch,
    branchAddress,
    ifscCode,
    accountNumber,
  } = req.body;
  const user = UserDB({
    bankName,
    accountHolderName,
    bankBranch,
    branchAddress,
    ifscCode,
    accountNumber,
  });

  user
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
