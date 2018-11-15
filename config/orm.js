var connection = require("connection.js");
//Helper function to help convert to SQL syntax
//creates a narray of question marks then converts the array to a string 
//used to pass values into the querystring
function printQuestionMarks(num){
    var arr =[];

    for(var i =0 ; i<num ; i++){
        arr.push("?");
    }
    return arr.toString();
}

//convert an object's key value pairs to a string in SQL syntax
function objToSql(ob){
    //create a new array to store the key/value pairs in
    var arr= [];

    //push all the pairs into the array as a string
    //loop through the object's keys 
    for (var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(cb,key))  {
            //if the string has spaces put it in quotes so it 
            if (typeof value === "string" && value.indexOf(" ") >=0){
                value = "'" + value + "'";
            }
            //this function takes in key values pairs as {key:value}
            //this function outputs key value pairs as ["key=value"]
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}



// * These are the methods you will need to use in order
//     to retrieve and store data in your database.
var orm = {


    selectAll : function(tableInput, cb) {
        var queryString = "SELECT FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne : function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString +="(";
        queryString +=cols.toString();  //we want to modify all of the columns in the table entry
        queryString +=")";
        queryString +="VALUES (";
        queryString += printQuestionMarks(vals.length); //create question marks for each value
        queryString +=") ";
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    updateOne : function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString+= " SET ";
        queryString+= objToSql(objColVals);
        queryString+= " WHERE ";
        queryString+= condition;
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    deleteOne : function(table, condition, cb){
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
}
module.exports = orm;