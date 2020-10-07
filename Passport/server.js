var express = require("express");
var app = express();

//Definition of modules for this project
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");

//Using own best friend => BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {});

app.listen(3000, function (err) {
  if (!err) console.log("Site is live");
  else console.log(err);
});
