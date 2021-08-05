const express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//closeMiddleware
const addEmployeeCreate = require("../controllers/addEmployee/addEmployeeCreate");
const addEmployeeFind = require("../controllers/addEmployee/addEmployeeFind");
const addEmployeeFindOne = require("../controllers/addEmployee/addEmployeeFindOne");
const addEmployeeUpdate = require("../controllers/addEmployee/addEmployeeUpdate");
const addEmployeeDelete = require("../controllers/addEmployee/addEmployeeDelete");

router.post("/create", auth, addEmployeeCreate);
router.get("/find", auth, addEmployeeFind);
router.get("/find/:id", auth, addEmployeeFindOne);
router.put("/update/:id", auth, addEmployeeUpdate);
router.delete("/delete/:id", auth, addEmployeeDelete);

module.exports = router;
