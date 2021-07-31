const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

const superAdminCreate = require("../controllers/superAdmin/superAdminCreate");
const superAdminUpdate = require("../controllers/superAdmin/superAdminUpdate");
const superAdminDelete = require("../controllers/superAdmin/superAdminDelete");
const superAdminFind = require("../controllers/superAdmin/superAdminFind");
const superAdminFindOne = require("../controllers/superAdmin/superAdminFindOne");

router.post("/create", auth, superAdminCreate);
router.put("/update/:id", auth, superAdminUpdate);
router.get("/find/:id", auth, superAdminFindOne);
router.get("/find", auth, superAdminFind);
router.delete("/delete/:id", auth, superAdminDelete);

module.exports = router;
