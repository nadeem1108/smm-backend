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

router.post("/create", studentDetailsRouteCreate);
router.delete("/delete/:id", studentDetailsRouteDelete);
router.get("/find", studentDetailsRouteFind);
router.get("/find/:id", studentDetailsRouteFindOne);
router.put("/update/:id", studentDetailsRouteUpdate);

module.exports = router;
