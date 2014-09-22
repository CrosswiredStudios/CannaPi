/**
 * Created by Matt on 8/29/2014.
 */
var router = require("express").Router();
var viewsDirectory = __dirname + '/views/';

router.use( function(req, res, next){
    console.log("CannaWeb: Middleware function executed");
    next();
});

router.get('/', function(req, res){
    console.log("CannaWeb: User routed to index page");
    res.sendFile(__dirname + '/index.html');
});

exports.Router = router;