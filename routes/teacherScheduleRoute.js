const express = require("express");
const router = express.Router();

//middleware
// const auth = require("../middleware/auth");

//closeMiddleware
const addTeacherScheduleCreate = require("../controllers/teacherSchedule/teacherScheduleCreate");
const addTeacherScheduleFind = require("../controllers/teacherSchedule/teacherScheduleFind");
const addTeacherScheduleFindOne = require("../controllers/teacherSchedule/teacherScheduleFindeOne");
const addTeacherScheduleUpdate = require("../controllers/teacherSchedule/teacherScheduleUpdate");
const addTeacherScheduleDelete = require("../controllers/teacherSchedule/teacherScheduleDelete");

router.post("/create",  addTeacherScheduleCreate);
router.get("/find",  addTeacherScheduleFind);
router.get("/find/:id",  addTeacherScheduleFindOne);
router.put("/update/:id",  addTeacherScheduleUpdate);
router.delete("/delete/:id",  addTeacherScheduleDelete);

module.exports = router;
