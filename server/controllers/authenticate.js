var db = require("../core/db");
var Http = require("../util/httpFunctions.js");
var User = require("../classes/user.js");
var Result = require("../classes/result.js");

exports.login = function (req, resp) {
    let sSQL = "SELECT user_id FROM tblUsers WITH (NOLOCK) WHERE email_address = '" + req.body.sUser + "' AND active = '1' ";
    db.execSQL(sSQL, function (data, err) {
        var oPackage = new Result("Login");
        oPackage.status = false
        if (err) {
            oPackage.title = "Server Error";
            oPackage.message = "Something went wrong on the server.";
            Http.sendResponse(resp, 500, "Login Error Occurred", oPackage);
        } else {
            oPackage.count = data.recordsets[0].length;
            if (data.recordsets[0].length > 0) {
                User.create(data.recordsets[0][0].user_id).then(function (result) {
                    if (result.data.locked) {
                        oPackage.title = "Login Error";
                        oPackage.message = "User is Locked out.";
                        Http.sendResponse(resp, 200, "Success", oPackage);
                    }else {
                        if (result.data.password === req.body.sPass) {

                            


                            oPackage.data = result;
                            oPackage.status = true;
                            Http.sendResponse(resp, 200, "Success", oPackage);
                        }else {
                            oPackage.title = "Login Error";
                            oPackage.message = "Invalid Username and Password.";
                            Http.sendResponse(resp, 200, "Success", oPackage);
                        }
                    }
                }).catch(function (err) {
                    oPackage.title = "Server Error";
                    oPackage.message = "Something went wrong on the server.";
                    Http.sendResponse(resp, 500, "Login Error Occurred", oPackage);
                });
            } else {
                oPackage.title = "Login Error";
                oPackage.message = "Invalid Username and Password.";
                Http.sendResponse(resp, 200, "Success", oPackage);
            }
        }
    });

}
