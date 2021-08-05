const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

const feeStructureCreate = require("../controllers/feeStructure/feeStructureCreate");
const feeStructureDelete = require("../controllers/feeStructure/feeStructureDelete");
const feeStructureFind = require("../controllers/feeStructure/feeStructureFind");
const feeStructureFindOne = require("../controllers/feeStructure/feeStructureFindOne");
const feeStructureUpdate = require("../controllers/feeStructure/feeStructureUpdate");

router.post("/create", auth, feeStructureCreate);
router.delete("/delete/:id", auth, feeStructureDelete);
router.get("/find", auth, feeStructureFind);
router.get("/find/:id", auth, feeStructureFindOne);
router.put("/update/:id", auth, feeStructureUpdate);

module.exports = router;
