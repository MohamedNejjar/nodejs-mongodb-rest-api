const express = require("express");
const dbConnection = require("./database/connection.js");
const DOTenv = require("dotenv");
const cors = require("cors");
// require  route
const productRout = require("./routes/productRoute.js");
const userRoute = require("./routes/usersRoute.js");
DOTenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || "3000";
//  post route
app.use("/api/users", userRoute);
app.use("/api/products", productRout);

// const middleWare = (req, res, next) => {
//   console.log("hello mohamed ");
//   next();
// };

// app.use(middleWare);
app.get("/", (req, res, next) => {
  const err = new Error("failed to get data");
  err.status = "failed";
  err.statusCode = 500;
  next(err);
});
dbConnection().then(() => {
  app.listen(port, () => {
    console.log(`server is listen to port ${port}`);
  });
});

app.use(function (err, req, res, nex) {
  res.status(err.statusCode).send({
    status: err.status,
    message: err.message,
    body: {},
  });
});
