const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addAcademicSectionCreate = require("../controllers/academicSection/academicSectionCreate");
const addAcademicSectionFind = require("../controllers/academicSection/academicSectionFind");
const addAcademicSectionFindOne = require("../controllers/academicSection/academicSectionFindeOne");
const addAcademicSectionUpdate = require("../controllers/academicSection/academicSectionUpdate");
const addAcademicSectionDelete = require("../controllers/academicSection/academicSectionDelete");

router.post("/create", auth, addAcademicSectionCreate);
router.get("/find", auth, addAcademicSectionFind);
router.get("/find/:id", auth, addAcademicSectionFindOne);
router.put("/update/:id", auth, addAcademicSectionUpdate);
router.delete("/delete/:id", auth, addAcademicSectionDelete);

module.exports = router;
