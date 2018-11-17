var express = require("express");
var burger = require("../models/burger.js");

//create the router and export at the end of file
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create(
        ["burger", "devoured"],
        [req.body.burger, false],
        function (result) {
            res.json({
                id: result.insertId
            });
        }
    );
});
router.put("/api/burgers/:id",function(req,res){
    var condition = "id = "+ req.params.id;

    console.log("condition",condition);
    burger.update(
        {devoured:req.body.devoured},
        condition, function(result){
            if(result.changedRows ==0){
                return res.status(404).end();
            }
            else{
                res.status(200).end();
            }
        }
    );
});
module.exports = router;