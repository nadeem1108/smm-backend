const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addSchoolCreate = require("../controllers/school/addSchool");
const addSchoolFind = require("../controllers/school/addSchoolFind");
const addSchoolFindOne = require("../controllers/school/addSchoolFindOne");
const addSchoolUpdate = require("../controllers/school/addSchoolUpdate");
const addSchoolDelete = require("../controllers/school/addSchoolDelete");

router.post("/create", auth, addSchoolCreate);
router.get("/find", auth, addSchoolFind);
router.get("/find/:id", auth, addSchoolFindOne);
router.put("/update/:id", auth, addSchoolUpdate);
router.delete("/delete/:id", auth, addSchoolDelete);

module.exports = router;
