/**
 * Created by Matt on 8/30/2014.
 */

var mysql   = require("./CannaDb"),
    api     = require("./CannaApi"),
    www     = require("./CannaWeb/CannaWeb"),
    express = require('express');


// Initialize database connection
//mysql.Initialize();

// Initiate express.js
var app = express();

// Register the CannaApi router
app.use('/api', api.Router);

// Register the CannaWeb router
app.use('/', www.Router);
app.use(express.static(__dirname + '/CannaWeb'));


// Listen on PORT environment variable or default to 80
app.listen(process.env['PORT'] || 80);

