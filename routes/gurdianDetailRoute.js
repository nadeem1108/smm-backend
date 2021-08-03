const express = require("express");
const router = express.Router();

//middleware
// const auth = require("../middleware/auth");

//closeMiddleware
const guardiansDetailsRouteCreate = require("../controllers/gaurdianDetail/guardianDetailCreate");
const guardiansDetailsRouteDelete = require("../controllers/gaurdianDetail/guardianDetailDelete");
const guardiansDetailsRouteFind = require("../controllers/gaurdianDetail/guardianDetailFind");
const guardiansDetailsRouteFindOne = require("../controllers/gaurdianDetail/guardianDetailFineOne");
const guardiansDetailsRouteUpdate = require("../controllers/gaurdianDetail/guardianDetailUpdate");

router.post("/create",  guardiansDetailsRouteCreate);
router.delete("/delete/:id",  guardiansDetailsRouteDelete);
router.get("/find",  guardiansDetailsRouteFind);
router.get("/find/:id",  guardiansDetailsRouteFindOne);
router.put("/update/:id",  guardiansDetailsRouteUpdate);

module.exports = router;
