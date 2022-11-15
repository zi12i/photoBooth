const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");

var upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "../uploads");
    },
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
});

router.post("/image", upload.single("file"), async (req, res) => {
  // console.log(req.body.field0);
  // router.post("/image", (req, res) => {
  console.log("camera/image : 요청 들어옴");
  // fs.writeFile("./writeme.txt", req.body);
  // console.log("사진 : ", req.body.field0);

  // const buffer = await streamToBuffer(req.body.field0);

  // const buffer = Buffer.from(req.body.field0, "base64");
  // console.log("buffer : ", buffer.toString("base64"));

  // const data = [];
  // let buffer = Buffer.concat(req.body.field0);
  // console.log(buffer);

  // req.body.on("data", (chunk) => {
  //   data.push(chunk);
  //   console.log(data);
  // });
  // req.body.on("end", () => [(buffer = Buffer.concat(data))]);

  // req.body.field0.on('end',()=>[
  //   base64data = Buffer.concat(data).toString("base64")
  // ])
  const buffer = Buffer.from(req.body.field0, "utf-8");
  console.log(buffer);
  // var bufs = [];
  // const stream = fs.createReadStream("req.body.field0");

  // stream.on("data", function (d) {
  //   bufs.push(d);
  // });

  base64data = buffer.toString("base64");
  const buffer2 = Buffer.from(base64data, "base64");
  fs.writeFileSync("new-path.jpg", buffer2);

  console.log("camera/image : 완료");
  // console.log(req.);

  res.sendStatus(200);
});

// router.post("/image", (req, res, next) => {
//   console.log("camera/image : 요청 들어옴");
//   console.log("request : ", req);
//   console.log("################################");
//   console.log("body : ", req.body);
//   // console.log("files : ", req.files);
//   console.log("data : ", req.data);
//   // console.log("url : ", req.url);

//   res.status(200).json({
//     message: "good",
//   });
// });

module.exports = router;
