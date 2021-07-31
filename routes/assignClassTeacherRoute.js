const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addassignClassTeacherCreate = require("../controllers/assignClassTeacher/assignTeacherCreate");
const addassignClassTeacherFind = require("../controllers/assignClassTeacher/assignTeacherFind");
const addassignClassTeacherFindOne = require("../controllers/assignClassTeacher/assignTeacherFindeOne");
const addassignClassTeacherUpdate = require("../controllers/assignClassTeacher/assignTeacherUpdate");
const addassignClassTeacherDelete = require("../controllers/assignClassTeacher/assignTeacherDelete");

router.post("/create", auth, addassignClassTeacherCreate);
router.get("/find", auth, addassignClassTeacherFind);
router.get("/find/:id", auth, addassignClassTeacherFindOne);
router.put("/update/:id", auth, addassignClassTeacherUpdate);
router.delete("/delete/:id", auth, addassignClassTeacherDelete);

module.exports = router;
