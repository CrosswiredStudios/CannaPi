/**
 * Created by Matt on 8/29/2014.
 */
var express = require('express');
var router = express.Router();
var gpio = require("pi-gpio");

router.use( function(req, res, next){
    console.log("Routing Middleware...");
    next();
});

router.get('/inputs/:id', function(req, res){
    res.send(inputs[req.params.id]);
});

/**
 * Test Data
 */
var inputs = [ { pin: '11', gpio: '17', value: 1 }, { pin: '12', gpio: '18', value: 0 } ];


exports.Router = router;

