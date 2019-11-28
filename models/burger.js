var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (column, value, cb) {
        orm.insertOne("burgers", column, value, function (res) {
            cb(res);
        });
    },
    updateOne: function (column, value, condition, cb) {
        orm.updateOne("burgers", column, value, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;