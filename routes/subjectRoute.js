const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addSubjectCreate = require("../controllers/subject/subjectCreate");
const addSubjectFind = require("../controllers/subject/subjectFind");
const addSubjectFindOne = require("../controllers/subject/subjectFindeOne");
const addSubjectUpdate = require("../controllers/subject/subjectUpdate");
const addSubjectDelete = require("../controllers/subject/subjectDelete");

router.post("/create", auth, addSubjectCreate);
router.get("/find", auth, addSubjectFind);
router.get("/find/:id", auth, addSubjectFindOne);
router.put("/update/:id", auth, addSubjectUpdate);
router.delete("/delete/:id", auth, addSubjectDelete);

module.exports = router;
