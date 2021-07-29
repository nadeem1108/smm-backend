const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const addClassScheduleCreate = require("../controllers/classSchedule/classScheduleCreate");
const addClassScheduleFind = require("../controllers/classSchedule/classScheduleFind");
const addClassScheduleFindOne = require("../controllers/classSchedule/classScheduleFindeOne");
const addClassScheduleUpdate = require("../controllers/classSchedule/classScheduleUpdate");
const addClassScheduleDelete = require("../controllers/classSchedule/classScheduleDelete");

router.post("/create", addClassScheduleCreate);
router.get("/find", addClassScheduleFind);
router.get("/find/:id", addClassScheduleFindOne);
router.put("/update/:id", addClassScheduleUpdate);
router.delete("/delete/:id", addClassScheduleDelete);

module.exports = router;
