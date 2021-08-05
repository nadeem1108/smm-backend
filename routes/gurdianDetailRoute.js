const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const guardiansDetailsRouteCreate = require("../controllers/gaurdianDetail/guardianDetailCreate");
const guardiansDetailsRouteDelete = require("../controllers/gaurdianDetail/guardianDetailDelete");
const guardiansDetailsRouteFind = require("../controllers/gaurdianDetail/guardianDetailFind");
const guardiansDetailsRouteFindOne = require("../controllers/gaurdianDetail/guardianDetailFineOne");
const guardiansDetailsRouteUpdate = require("../controllers/gaurdianDetail/guardianDetailUpdate");

router.post("/create", auth, guardiansDetailsRouteCreate);
router.delete("/delete/:id", auth, guardiansDetailsRouteDelete);
router.get("/find", auth, guardiansDetailsRouteFind);
router.get("/find/:id", auth, guardiansDetailsRouteFindOne);
router.put("/update/:id", auth, guardiansDetailsRouteUpdate);

module.exports = router;
