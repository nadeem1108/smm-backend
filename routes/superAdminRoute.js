const express = require("express");

const router = express.Router();


const superAdminSignup = require("../controllers/superAdmin/superAdminCreate");
const superAdminUpdate = require("../controllers/superAdmin/superAdminUpdate");
const superAdminDelete = require("../controllers/superAdmin/superAdminDelete");
const superAdminFind = require("../controllers/superAdmin/superAdminFind");
const superAdminFindOne = require("../controllers/superAdmin/superAdminFindOne");


router.post("/create", superAdminSignup);
router.put("/update/:id", superAdminUpdate);
router.get("/find/:id", superAdminFindOne);
router.get("/find", superAdminFind);
router.delete("/delete/:id", superAdminDelete);

module.exports = router;
