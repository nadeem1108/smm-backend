const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addSubjectCreate = require("../controllers/subject/subjectCreate");
const addSubjectFind = require("../controllers/subject/subjectFind");
const addSubjectFindOne = require("../controllers/subject/subjectFindeOne");
const addSubjectUpdate = require("../controllers/subject/subjectUpdate");
const addSubjectDelete = require("../controllers/subject/subjectDelete");

router.post("/create", addSubjectCreate);
router.get("/find", addSubjectFind);
router.get("/find/:id", addSubjectFindOne);
router.put("/update/:id", addSubjectUpdate);
router.delete("/delete/:id", addSubjectDelete);

module.exports = router;
