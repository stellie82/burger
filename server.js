// Required modules
var express = require("express");
var exphbs = require("express-handlebars");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up static content from the "public" directory in the application directory
app.use(express.static("public"));

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and allow the server access
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server to begin listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});