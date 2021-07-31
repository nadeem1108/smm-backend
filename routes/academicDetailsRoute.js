const express = require("express");
const router = express.Router();


//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const academicDetailsRouteCreate = require("../controllers/academicDetails/academicDetailsCreate");
const academicDetailsRouteDelete = require("../controllers/academicDetails/academicDetailsDelete");
const academicDetailsRouteFind = require("../controllers/academicDetails/academicDetailsFind");
const academicDetailsRouteFindOne = require("../controllers/academicDetails/academicDetailsFindOne");
const academicDetailsRouteUpdate = require("../controllers/academicDetails/academicDetailsUpdate");

router.post("/create", auth, academicDetailsRouteCreate);
router.delete("/delete/:id", auth, academicDetailsRouteDelete);
router.get("/find", auth, academicDetailsRouteFind);
router.get("/find/:id", auth, academicDetailsRouteFindOne);
router.put("/update/:id", auth, academicDetailsRouteUpdate);

module.exports = router;
