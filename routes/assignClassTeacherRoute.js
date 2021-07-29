const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addassignClassTeacherCreate = require("../controllers/assignClassTeacher/assignTeacherCreate");
const addassignClassTeacherFind = require("../controllers/assignClassTeacher/assignTeacherFind");
const addassignClassTeacherFindOne = require("../controllers/assignClassTeacher/assignTeacherFindeOne");
const addassignClassTeacherUpdate = require("../controllers/assignClassTeacher/assignTeacherUpdate");
const addassignClassTeacherDelete = require("../controllers/assignClassTeacher/assignTeacherDelete");


router.post("/create",  addassignClassTeacherCreate);
router.get("/find",  addassignClassTeacherFind);
router.get("/find/:id",  addassignClassTeacherFindOne);
router.put("/update/:id",addassignClassTeacherUpdate);
router.delete("/delete/:id",addassignClassTeacherDelete);


module.exports = router;
