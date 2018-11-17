
//set up express
var express = require("express");


var PORT = process.env.port || 8080;

var app = express();

//serve static content for the app from the "public" directory in the application directory

app.use(express.static(__dirname+"/public"));

//parse application body as json
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//set up handlebars
var handlebars = require("express-handlebars");

//set the engine to handlebars and set the default page to main.handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}));

//set view engine to handlebars
app.set("view engine","handlebars");

//import routes and give server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//start our server
app.listen(PORT,function(){
    console.log("Server listening on: http//localhost:" + PORT);
});
