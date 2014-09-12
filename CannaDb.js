/**
 * Created by Matt on 8/30/2014.
 */
var mysql = require("mysql");

/**
 * DATABASE SETUP
 * @constructor
 */
function Initialize() {
    var db = mysql.createConnection({
        host: 'sql2.freemysqlhosting.net',
        database: 'sql250985',
        user: 'sql250985',
        password: 'wD3*sS9!',
        port: 3306
    });
    console.log('Connecting to MySql Database...');
    db.connect(function (error) {
        if (error) {
            console.error('error connecting: ' + error.stack);
        }
        else {
            console.log('Connected to MySql Database');
        }
    });
}

exports.Initialize = Initialize;