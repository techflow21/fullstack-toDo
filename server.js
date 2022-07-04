require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

// import routes
const authRoute = require("./routes/auth");
const toDosRoute = require("./routes/todos");

// express app
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// api endpoints
app.get("/api", (req, res) => {
  res.send("This is fullstack server");
});

app.use("/api/auth", authRoute);
app.use("/api/todos", toDosRoute);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// mongoose connection to MongoDB Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
