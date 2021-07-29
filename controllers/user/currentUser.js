const express = require("express");

// @route GET api/users/current
// $desc Return Current user
// @access private Route

(req, res) => {
  res.json({ msg: "Success" });
};
