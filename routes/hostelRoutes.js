const express = require("express");
const router = express.Router();

//middleware
// const auth = require("../middleware/auth");

//closeMiddleware
const hostelRouteCreate = require("../controllers/hostel/hostelCreate");
const hostelRouteDelete = require("../controllers/hostel/hostelDelete");
const hostelRouteFind = require("../controllers/hostel/hostelFind");
const hostelRouteFindOne = require("../controllers/hostel/hostelFindOne");
const hostelRouteUpdate = require("../controllers/hostel/hostelUpdate");

router.post("/create",  hostelRouteCreate);
router.delete("/delete/:id",  hostelRouteDelete);
router.get("/find",  hostelRouteFind);
router.get("/find/:id",  hostelRouteFindOne);
router.put("/update/:id",  hostelRouteUpdate);

module.exports = router;
