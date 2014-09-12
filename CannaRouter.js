/**
 * Created by Matt on 8/30/2014.
 */
var express = require("express");
var router = express.Router();

router.use( function(req, res, next){
    console.log("Routing Middleware...");
    next();
});

router.get('/', function(req, res){
    res.json({message: "api home"});
});

app.use('/api', router);

exports.Route = Route;