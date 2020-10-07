var express = require("express");
var app = express();

//Definition of modules for this project
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");

//Using own best friend => BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(
  session({ secret: "Koi Gallardo", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get("/", function (req, res) {});

app.listen(3000, function (err) {
  if (!err) console.log("Site is live");
  else console.log(err);
});

//Models
var models = require("./models");

//Sync Database
models.sequelize
  .sync()
  .then(function () {
    console.log("Nice! Database looks fine");
  })
  .catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
