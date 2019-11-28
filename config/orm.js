var connection = require("./connection.js");

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
    updateOne: function (table, column, value, condition, cb) {
        var queryString = "UPDATE " + table

        queryString += " SET " + column + " = " + value;
        queryString += " WHERE ";
        queryString += condition + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;