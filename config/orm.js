var connection = require("./connection.js");

// Create a function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Object for all SQL statement functions
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        var queryString = "INSERT INTO " + table

        queryString += " (" + column.toString() + ") ";
        queryString += "VALUES ('" + value + "');";
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table

        queryString += " SET " + objToSql(objColVal);
        queryString += " WHERE ";
        queryString += condition + ";";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the ORM object for model
module.exports = orm;