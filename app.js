const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
const morgan = require("morgan");
// const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const cameraRouter = require("./routes/camera");

// const { sequelize } = require("./models");

const app = express();

const PORT = process.env.PORT;
app.set("port", PORT);

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.use(morgan("dev"));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//   })
// );

app.use("/camera", cameraRouter);

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