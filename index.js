
// Setup express and ejs
const express = require ('express');
const ejs = require('ejs');
const path = require("path");

// Create the express application object
const app = express()
const port = 8000
// Include the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');
// Set up the body parser 
app.use(express.urlencoded({ extended: true })); 

// Load the route handlers
const mainRoutes = require("./routes/main.js");  
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

