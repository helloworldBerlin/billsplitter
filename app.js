var express = require("express");
var path = require("path");

var app = express();

var index = require("./mvc/controller/index.js");
var data = require("./mvc/controller/data.js");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "mvc", "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

app.listen("8080");
console.log("Server is running");

exports = module.exports = app;
