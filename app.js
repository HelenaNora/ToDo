require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRouter = require("./routers/todo");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(todoRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(2000); //localhost:2000
    console.log("Successfully connected to mongodb Atlas");
  })
  .catch((err) => console.log(err));

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message: message });
});
