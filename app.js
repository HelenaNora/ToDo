require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use(require("./routes/todo"));

//server configurations.....
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(3000); //localhost:8080
    console.log("Successfully connected to mongodb Atlas");
  })
  .catch((err) => console.log(err));
