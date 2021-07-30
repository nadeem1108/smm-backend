const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const employeeAcademicDetailsCreate = require("../controllers/employeeAcademicDetails/academicDetailsCreate");
const employeeAcademicDetailsFind = require("../controllers/employeeAcademicDetails/academicDetailsFind");
const employeeAcademicDetailsFindOne = require("../controllers/employeeAcademicDetails/academicDetailsFindeOne");
const employeeAcademicDetailsUpdate = require("../controllers/employeeAcademicDetails/academicDetailsUpdate");
const employeeAcademicDetailsDelete = require("../controllers/employeeAcademicDetails/academicDetailsDelete");

router.post("/create", employeeAcademicDetailsCreate);
router.get("/find", employeeAcademicDetailsFind);
router.get("/find/:id", employeeAcademicDetailsFindOne);
router.put("/update/:id", employeeAcademicDetailsUpdate);
router.delete("/delete/:id", employeeAcademicDetailsDelete);

module.exports = router;
