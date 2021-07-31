const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addTeacherScheduleCreate = require("../controllers/teacherSchedule/teacherScheduleCreate");
const addTeacherScheduleFind = require("../controllers/teacherSchedule/teacherScheduleFind");
const addTeacherScheduleFindOne = require("../controllers/teacherSchedule/teacherScheduleFindeOne");
const addTeacherScheduleUpdate = require("../controllers/teacherSchedule/teacherScheduleUpdate");
const addTeacherScheduleDelete = require("../controllers/teacherSchedule/teacherScheduleDelete");

router.post("/create", auth, addTeacherScheduleCreate);
router.get("/find", auth, addTeacherScheduleFind);
router.get("/find/:id", auth, addTeacherScheduleFindOne);
router.put("/update/:id", auth, addTeacherScheduleUpdate);
router.delete("/delete/:id", auth, addTeacherScheduleDelete);

module.exports = router;
