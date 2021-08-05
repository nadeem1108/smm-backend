const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const hostelRouteCreate = require("../controllers/hostel/hostelCreate");
const hostelRouteDelete = require("../controllers/hostel/hostelDelete");
const hostelRouteFind = require("../controllers/hostel/hostelFind");
const hostelRouteFindOne = require("../controllers/hostel/hostelFindOne");
const hostelRouteUpdate = require("../controllers/hostel/hostelUpdate");

router.post("/create", auth, hostelRouteCreate);
router.delete("/delete/:id", auth, hostelRouteDelete);
router.get("/find", auth, hostelRouteFind);
router.get("/find/:id", auth, hostelRouteFindOne);
router.put("/update/:id", auth, hostelRouteUpdate);

module.exports = router;
