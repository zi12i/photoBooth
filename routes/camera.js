const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

// const qrcode = require("qrcode");

var upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "img/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
});

router.post("/image", upload.array("img"), (req, res) => {
  // router.post("/image", (req, res) => {
  console.log("camera/image : 요청 들어옴");

  // const url = "http://192.168.0.16:5500/views/photo.html";

  // QRCode.toDataURL(url, (err, url) => {
  //   if (err) console.log(err);
  //   const a = (this.qrcodeUrl = url);
  //   console.log(a);
  // });

  console.log("camera/image : 완료");
  res.sendStatus(200);
});

module.exports = router;
