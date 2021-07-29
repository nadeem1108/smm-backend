const express = require("express");
const router = express.Router();

const feeStructureCreate = require("../controllers/feeStructure/feeStructureCreate");
const feeStructureDelete = require("../controllers/feeStructure/feeStructureDelete");
const feeStructureFind = require("../controllers/feeStructure/feeStructureFind");
const feeStructureFindOne = require("../controllers/feeStructure/feeStructureFindOne");
const feeStructureUpdate = require("../controllers/feeStructure/feeStructureUpdate");

router.post("/create", feeStructureCreate);
router.delete("/delete/:id", feeStructureDelete);
router.get("/find", feeStructureFind);
router.get("/find/:id", feeStructureFindOne);
router.put("/update/:id", feeStructureUpdate);

module.exports = router;
