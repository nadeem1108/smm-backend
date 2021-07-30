const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const employeeBankDetailsCreate = require("../controllers/employeeBankDetails/BankDetailsCreate");
const employeeBankDetailsFind = require("../controllers/employeeBankDetails/BankDetailsFind");
const employeeBankDetailsFindOne = require("../controllers/employeeBankDetails/BankDetailsFindeOne");
const employeeBankDetailsUpdate = require("../controllers/employeeBankDetails/BankDetailsUpdate");
const employeeBankDetailsDelete = require("../controllers/employeeBankDetails/BankDetailsDelete");

router.post("/create", employeeBankDetailsCreate);
router.get("/find", employeeBankDetailsFind);
router.get("/find/:id", employeeBankDetailsFindOne);
router.put("/update/:id", employeeBankDetailsUpdate);
router.delete("/delete/:id", employeeBankDetailsDelete);

module.exports = router;
