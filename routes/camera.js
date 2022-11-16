const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

var upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "img/");
    },
    filename(req, file, done) {
      // const ext = path.extname(file.originalname);
      done(null, file.originalname);
    },
  }),
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
});

router.post("/image", upload.array("img"), (req, res) => {
  console.log("camera/image : 요청 들어옴");
  console.log("camera/image : 완료");
  res.sendStatus(200);
});

module.exports = router;
