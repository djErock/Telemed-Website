var db = require("../core/db");

exports.getCompanyList = function(req, resp) {
    db.execSQL("SELECT * FROM tblCompany", function(data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occurred",{"Content-Type": "application/json"});
            resp.write(JSON.stringify(err));
        }else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}