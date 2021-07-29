const express = require("express");

const router = express.Router();
//middleware

//closeMiddleware
const guardiansDetailsRouteCreate = require("../controllers/guardianDetail/guardianDetailCreate");
const guardiansDetailsRouteDelete = require("../controllers/guardianDetail/guardianDetailDelete");
const guardiansDetailsRouteFind = require("../controllers/guardianDetail/guardianDetailFind");
const guardiansDetailsRouteFindOne = require("../controllers/guardianDetail/guardianDetailFineOne");
const guardiansDetailsRouteUpdate = require("../controllers/guardianDetail/guardianDetailUpdate");

router.post("/create", guardiansDetailsRouteCreate);
router.delete("/delete/:id", guardiansDetailsRouteDelete);
router.get("/find", guardiansDetailsRouteFind);
router.get("/find/:id", guardiansDetailsRouteFindOne);
router.put("/update/:id", guardiansDetailsRouteUpdate);

module.exports = router;
