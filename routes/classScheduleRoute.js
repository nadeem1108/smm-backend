const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addClassScheduleCreate = require("../controllers/classSchedule/classScheduleCreate");
const addClassScheduleFind = require("../controllers/classSchedule/classScheduleFind");
const addClassScheduleFindOne = require("../controllers/classSchedule/classScheduleFindeOne");
const addClassScheduleUpdate = require("../controllers/classSchedule/classScheduleUpdate");
const addClassScheduleDelete = require("../controllers/classSchedule/classScheduleDelete");

router.post("/create", auth, addClassScheduleCreate);
router.get("/find", auth, addClassScheduleFind);
router.get("/find/:id", auth, addClassScheduleFindOne);
router.put("/update/:id", auth, addClassScheduleUpdate);
router.delete("/delete/:id", auth, addClassScheduleDelete);

module.exports = router;
