var sqlDB = require("mssql");
var settings = require("../settings.js");

exports.execSQL = function(sql, callback) {

    var conn = new sqlDB.ConnectionPool(settings.dbConfig);
    conn.connect().then(function() {
        
        var req = new sqlDB.Request(conn);
        req.query(sql).then(function(recordset) {
            callback(recordset);
        }).catch(function(err) {
            console.log(err);
            callback(null, err);
        });

    }).catch(function(err) {
        console.log(err);
        callback(null, err);
    });

};