const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("hi");
  return res.render("scream.html");
  // console.log("hello");
});

module.exports = router;
