const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const studentDetailsRouteCreate = require("../controllers/studentDetails/studentDetailsCreate");
const studentDetailsRouteDelete = require("../controllers/studentDetails/studentDetailsDelete");
const studentDetailsRouteFind = require("../controllers/studentDetails/studentDetailsFind");
const studentDetailsRouteFindOne = require("../controllers/studentDetails/studentDetailsFindOne");
const studentDetailsRouteUpdate = require("../controllers/studentDetails/studentDetailsUpdate");

router.post("/create", auth, studentDetailsRouteCreate);
router.delete("/delete/:id", auth, studentDetailsRouteDelete);
router.get("/find", auth, studentDetailsRouteFind);
router.get("/find/:id", auth, studentDetailsRouteFindOne);
router.put("/update/:id", auth, studentDetailsRouteUpdate);

module.exports = router;
