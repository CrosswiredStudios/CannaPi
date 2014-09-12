/**
 * Created by Matt on 8/30/2014.
 */

var mysql   = require("./CannaDb"),
    api     = require("./CannaApi"),
    www     = require("./CannaWeb/CannaWeb"),
    express = require('express');
    //gpio = require("pi-gpio");

// Initialize database connection
//mysql.Initialize();

// Initiate express.js
var app = express();
app.engine('html', require('ejs').renderFile)
// Register the CannaApi router
app.use('/api', api.Router);
// Register the CannaWeb router
app.use('/', www.Router);
// Listen on PORT environment variable or default to 80
app.listen(process.env['PORT'] || 80);

