const express = require("express");
const route = express.Router();
//middleware


//closeMiddleware
const notificationCreate = require("../controllers/notification/notificationCreate");

const notificationUpdate = require("../controllers/notification/notificationUpdate");
const notificationDelete = require("../controllers/notification/notificationDelete");

route.post("/create",  notificationCreate);

route.put("/update/:id", notificationUpdate);
route.delete("/delete/:id", notificationDelete);

module.exports = route;