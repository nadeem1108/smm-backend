const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addSubToClassCreate = require("../controllers/assignSubToClass/assignSubToClassCreate");
const addSubToClassFind = require("../controllers/assignSubToClass/assignSubToClassFind");
const addSubToClassFindOne = require("../controllers/assignSubToClass/assignSubToClassFindeOne");
const addSubToClassUpdate = require("../controllers/assignSubToClass/assignSubToClassUpdate");
const addSubToClassDelete = require("../controllers/assignSubToClass/assignSubToClassDelete");

router.post("/create", auth, addSubToClassCreate);
router.get("/find", auth, addSubToClassFind);
router.get("/find/:id", auth, addSubToClassFindOne);
router.put("/update/:id", auth, addSubToClassUpdate);
router.delete("/delete/:id", auth, addSubToClassDelete);

module.exports = router;
