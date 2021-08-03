const express = require("express");
const router = express.Router();

//middleware
// const auth = require("../middleware/auth");

//closeMiddleware
const addSubToClassCreate = require("../controllers/assignSubToClass/assignSubToClassCreate");
const addSubToClassFind = require("../controllers/assignSubToClass/assignSubToClassFind");
const addSubToClassFindOne = require("../controllers/assignSubToClass/assignSubToClassFindeOne");
const addSubToClassUpdate = require("../controllers/assignSubToClass/assignSubToClassUpdate");
const addSubToClassDelete = require("../controllers/assignSubToClass/assignSubToClassDelete");

router.post("/create",  addSubToClassCreate);
router.get("/find",  addSubToClassFind);
router.get("/find/:id",  addSubToClassFindOne);
router.put("/update/:id",  addSubToClassUpdate);
router.delete("/delete/:id",  addSubToClassDelete);

module.exports = router;
