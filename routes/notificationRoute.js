const express = require("express");
const route = express.Router();

//middleware
const auth = require("../middleware/auth");


//closeMiddleware
const notificationCreate = require("../controllers/notification/notificationCreate");
const notificationUpdate = require("../controllers/notification/notificationUpdate");
const notificationDelete = require("../controllers/notification/notificationDelete");


route.post("/create", auth, notificationCreate);
route.put("/update/:id", auth, notificationUpdate);
route.delete("/delete/:id", auth, notificationDelete);

module.exports = route;
