const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const academicDetailsRouteCreate = require("../controllers/academicDetails/academicDetailsCreate");
const academicDetailsRouteDelete = require("../controllers/academicDetails/academicDetailsDelete");
const academicDetailsRouteFind = require("../controllers/academicDetails/academicDetailsFind");
const academicDetailsRouteFindOne = require("../controllers/academicDetails/academicDetailsFindOne");
const academicDetailsRouteUpdate = require("../controllers/academicDetails/academicDetailsUpdate");

router.post("/create", academicDetailsRouteCreate);
router.delete("/delete/:id", academicDetailsRouteDelete);
router.get("/find", academicDetailsRouteFind);
router.get("/find/:id", academicDetailsRouteFindOne);
router.put("/update/:id", academicDetailsRouteUpdate);

module.exports = router;
