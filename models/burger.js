var orm = require("../config/orm.js");
// *  Create the functions that call the ORM functions
var burger = {
    all: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },

    create: function(cols, vals,cb){
        orm.insertOne("burgers",cols,vals,cb,function(res){
            cb(res);
        });
    },
    update: function(objColVals,condition,cb){
        orm.updateOne("burgers",objColVals,condition,cb,function(res){
            cb(res);
        });
    },
    delete: function(condition,cb){
        orm.deleteOne("burgers",condition,function(res){
            cb(res);
        });
    }
}
// * Export at the end of the `burger.js` file.

module.exports = burger;