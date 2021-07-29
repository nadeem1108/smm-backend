const express = require("express");
// var multer  = require('multer');
const route = express.Router();


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log(file);
//         cb(null, "./uploads/")
//     },
//     filename: function (req, file, cb) {
//         const currentTime = new Date();
//         const d = currentTime.getTime().toString();
//         //console.log(currentTime);
//         //console.log(d);
//         const ext = file.originalname.split('.').pop();
//         cb(null, d+'.'+ext)
//     }
// })

// var upload = multer( {storage:storage} )

// var upload = multer( {storage:storage})
// console.log(upload);

const userCreate = require("../controllers/user/userCreate");
const userFind = require("../controllers/user/userFind");
const userUpdate = require("../controllers/user/userUpdate");
const userDelete = require("../controllers/user/userDelete");

route.post("/create",  userCreate);
route.get("/find", userFind);
route.put("/update/:id", userUpdate);
route.delete("/delete/:id", userDelete);

module.exports = route;
