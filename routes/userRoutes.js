const express = require("express");
const router = express.Router();
const passport = require("passport");

const currentUser = require("../controllers/user/currentUser");
const userLogin = require("../controllers/user/userLogin");
const userRegister = require("../controllers/user/userRegister");


router.post("/register", userRegister);
router.post("/login", userLogin);


module.exports = router;
