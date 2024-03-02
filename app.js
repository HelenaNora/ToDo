require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
//routes
app.use(require("./routes/todo"));

//server configurations.....
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(3000); //localhost:3000
    console.log("Successfully connected to mongodb Atlas");
  })
  .catch((err) => console.log(err));

app.use((err, req, res, next) => {
  const statuCode = err.status || 500;
  const message = err.message;
  res.status(statuCode).json({ message: message });
});
