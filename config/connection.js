//  * Setup the code to connect Node to MySQL.
var mysql = require("mysql");

//connection info for mysql 
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database:"burgers_db"

});
//create the connection
connection.connect(function(err){
    if(err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
})

//  * Export the connection.

module.exports = connection;