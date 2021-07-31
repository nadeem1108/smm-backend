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


router.post("/create", addEmployeeCreate);
router.get("/find", addEmployeeFind);
router.get("/find/:id", addEmployeeFindOne);
router.put("/update/:id", addEmployeeUpdate);
router.delete("/delete/:id", addEmployeeDelete);


module.exports = router;
