const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addAcademicClassCreate = require("../controllers/academicClass/academicClassCreate");
const addAcademicClassFind = require("../controllers/academicClass/academicClassFind");
const addAcademicClassFindOne = require("../controllers/academicClass/academicClassFindeOne");
const addAcademicClassUpdate = require("../controllers/academicClass/academicClassUpdate");
const addAcademicClassDelete = require("../controllers/academicClass/academicClassDelete");


router.post("/create",  addAcademicClassCreate);
router.get("/find",  addAcademicClassFind);
router.get("/find/:id",  addAcademicClassFindOne);
router.put("/update/:id",addAcademicClassUpdate);
router.delete("/delete/:id",addAcademicClassDelete);


module.exports = router;
