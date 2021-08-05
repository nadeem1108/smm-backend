const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const employeeAcademicDetailsCreate = require("../controllers/employeeAcademicDetails/academicDetailsCreate");
const employeeAcademicDetailsFind = require("../controllers/employeeAcademicDetails/academicDetailsFind");
const employeeAcademicDetailsFindOne = require("../controllers/employeeAcademicDetails/academicDetailsFindeOne");
const employeeAcademicDetailsUpdate = require("../controllers/employeeAcademicDetails/academicDetailsUpdate");
const employeeAcademicDetailsDelete = require("../controllers/employeeAcademicDetails/academicDetailsDelete");

router.post("/create", auth, employeeAcademicDetailsCreate);
router.get("/find", auth, employeeAcademicDetailsFind);
router.get("/find/:id", auth, employeeAcademicDetailsFindOne);
router.put("/update/:id", auth, employeeAcademicDetailsUpdate);
router.delete("/delete/:id", auth, employeeAcademicDetailsDelete);

module.exports = router;
