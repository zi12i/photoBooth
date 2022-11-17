const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const cameraRouter = require("./routes/camera");

const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.set("port", PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(morgan("dev"));

app.use("/img", express.static(path.join(__dirname, "img")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/camera", cameraRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/scream.html"));
});

app.get("/index", (req, res) => {
  res.redirect(path.join(__dirname, "./views/photobooth.html"));
});

app.get("/qr", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/qr.html"));
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? error : {};
  res.status(error.status || 500);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
