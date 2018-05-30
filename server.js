//Require node dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var bodyParser = require("body-parser"); //JSON responses
var mongoose = require("mongoose"); //Mongo object modelling 
var request = require("request"); //Makes http calls
var cheerio = require("cheerio"); // Scraping tool

// Require models
var db = require("./models");

// Port configuration for local/Heroku
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Controller
var router = require("./controllers/api.js");
app.use(router);


// Database Configuration
// Connect to localhost if not a production environment
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
