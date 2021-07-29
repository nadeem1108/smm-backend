const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addAcademicSectionCreate = require("../controllers/academicSection/academicSectionCreate")
const addAcademicSectionFind = require("../controllers/academicSection/academicSectionFind");
const addAcademicSectionFindOne = require("../controllers/academicSection/academicSectionFindeOne");
const addAcademicSectionUpdate = require("../controllers/academicSection/academicSectionUpdate");
const addAcademicSectionDelete = require("../controllers/academicSection/academicSectionDelete");


router.post("/create",  addAcademicSectionCreate);
router.get("/find",  addAcademicSectionFind);
router.get("/find/:id",  addAcademicSectionFindOne);
router.put("/update/:id",addAcademicSectionUpdate);
router.delete("/delete/:id",addAcademicSectionDelete);


module.exports = router;
