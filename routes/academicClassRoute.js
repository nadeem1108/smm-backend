const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addAcademicClassCreate = require("../controllers/academicClass/academicClassCreate");
const addAcademicClassFind = require("../controllers/academicClass/academicClassFind");
const addAcademicClassFindOne = require("../controllers/academicClass/academicClassFindeOne");
const addAcademicClassUpdate = require("../controllers/academicClass/academicClassUpdate");
const addAcademicClassDelete = require("../controllers/academicClass/academicClassDelete");

router.post("/create", auth, addAcademicClassCreate);
router.get("/find", auth, addAcademicClassFind);
router.get("/find/:id", auth, addAcademicClassFindOne);
router.put("/update/:id", auth, addAcademicClassUpdate);
router.delete("/delete/:id", auth, addAcademicClassDelete);

module.exports = router;
