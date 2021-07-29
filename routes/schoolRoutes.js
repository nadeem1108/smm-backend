const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addSchoolCreate = require("../controllers/school/addSchool");
const addSchoolFind = require("../controllers/school/addSchoolFind");
const addSchoolFindOne = require("../controllers/school/addSchoolFindOne");
const addSchoolUpdate = require("../controllers/school/addSchoolUpdate");
const addSchoolDelete = require("../controllers/school/addSchoolDelete");

router.post("/create", addSchoolCreate);
router.get("/find", addSchoolFind);
router.get("/find/:id", addSchoolFindOne);
router.put("/update/:id", addSchoolUpdate);
router.delete("/delete/:id", addSchoolDelete);

module.exports = router;
