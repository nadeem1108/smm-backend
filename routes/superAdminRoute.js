const express = require("express");
const superAdminSignup = require("../controllers/superAdmin/superAdminCreate");
const superAdminUpdate = require("../controllers/superAdmin/superAdminUpdate");
const superAdminDelete = require("../controllers/superAdmin/superAdminDelete");

const router = express.Router();

// route.post("/superadminsignup", superAdminSignup);
router.route("/superadminsignup").post(superAdminSignup);
router.put("/update/:id", superAdminUpdate);
router.delete("/delete/:id", superAdminDelete);

module.exports = router;
