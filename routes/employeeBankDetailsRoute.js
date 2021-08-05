const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const employeeBankDetailsCreate = require("../controllers/employeeBankDetails/bankDetailsCreate");
const employeeBankDetailsFind = require("../controllers/employeeBankDetails/bankDetailsFind");
const employeeBankDetailsFindOne = require("../controllers/employeeBankDetails/bankDetailsFindeOne");
const employeeBankDetailsUpdate = require("../controllers/employeeBankDetails/bankDetailsUpdate");
const employeeBankDetailsDelete = require("../controllers/employeeBankDetails/bankDetailsDelete");

router.post("/create", auth, employeeBankDetailsCreate);
router.get("/find", auth, employeeBankDetailsFind);
router.get("/find/:id", auth, employeeBankDetailsFindOne);
router.put("/update/:id", auth, employeeBankDetailsUpdate);
router.delete("/delete/:id", auth, employeeBankDetailsDelete);

module.exports = router;
