/**
 * Created by Matt on 8/29/2014.
 */
var express = require("express");
var router = express.Router();

router.use( function(req, res, next){
    console.log("Routing Middleware...");
    next();
});

router.get('/', function(req, res){
    res.send('index');
});

exports.Router = router;