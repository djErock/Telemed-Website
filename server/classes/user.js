var db = require("../core/db");
var Result = require("./result.js");
var Utility = require("../util/utilities.js");

module.exports = class User {
    constructor() {
        this.iUserId = Long;
        this.iUserLevelId = Long;
        this.sUserName = String;
        this.sFirstName = String;
        this.sLastName = String;
        this.sEmailAddress = String;
        this.sSSN = String;
        this.sImagePath = String;
        this.sSignaturePath = String;
        this.iDefaultLocationId = Integer;
        this.sLicenseNumber = String;
        this.sDeaNumber = String;
        this.iSessionTimeout = Integer;
        this.sPassword = String;
        this.sNewPassword = String;
        this.dtPasswordDate = Date;
        this.dtDateLogin = Date;
        this.dtDateCreated = Date;
        this.dtDateModified = Date;
        this.bCaduceus = Boolean;
        this.bEMR = Boolean;
        this.bActive = Boolean;
        this.bLocked = Boolean;
    };

    static create(iUserId) {
        var oPackage = new Result("User");
        return new Promise(function (resolve, reject) {
            let sSQL = "SELECT * FROM tblUsers WITH (NOLOCK) WHERE user_id = '" + iUserId + "'";
            db.execSQL(sSQL, function (data, err) {
                if (err) {
                    oPackage.title = "Server Error";
                    oPackage.status = false;
                    oPackage.message = "Something went wrong on the server.";
                    oPackage.data = err;
                    reject(oPackage);
                } else {
                    oPackage.status = true;
                    oPackage.data = data.recordsets[0][0];
                    resolve(oPackage);
                }
            });
        }).catch(function (err) {
            oPackage.status = false;
            oPackage.data = err;
            return oPackage;
        });
    };

    static createSession(iUserId) {
        var oPackage = new Result("User");
        var sSQL;
        return new Promise(function (resolve, reject) {
            /*
            var d = new Date();
            d.setHours(d.getHours() - 2);
            sSQL = "DELETE FROM tblSessionHash WHERE session_date < '" + Utility.formatDate(d) + "'";
            db.execSQL(sSQL, function (data, err) { 
                if (err) reject();
            });
            sSQL = "";
            db.execSQL(sSQL, function (data, err) { 
                if (err) reject();
            });
            */
        }).catch(function (err) {
            oPackage.status = false;
            oPackage.data = err;
            return oPackage;
        });
    };
}


/*

Public Sub New(ByVal Value As Long, ByVal oConn As SqlConnection)
    If (Value <> 0) Then
        iUserId = Value
        Dim oSQLVisit As New SQL()
        Dim oUtil As New Util()
        Dim sSQL As String = "SELECT * FROM tblUsers WITH (NOLOCK) WHERE user_id = '" & iUserId & "'"
        Dim oCmd As New SqlCommand(sSQL, oConn)
        Dim oRdr As SqlDataReader = oCmd.ExecuteReader()

        While oRdr.Read
            iUserId = oRdr("user_id")
            iUserLevelId = oRdr("userlevel_id")

            If (Not IsDBNull(oRdr("email_address"))) Then sEmailAddress = oRdr("email_address")
            If (Not IsDBNull(oRdr("user_name"))) Then sUserName = oRdr("user_name")
            If (Not IsDBNull(oRdr("first_name"))) Then sFirstName = oRdr("first_name")
            If (Not IsDBNull(oRdr("last_name"))) Then sLastName = oRdr("last_name")
            If (Not IsDBNull(oRdr("ss"))) Then sSSN = oRdr("ss")
            If (Not IsDBNull(oRdr("image_path"))) Then sImagePath = oRdr("image_path")
            If (Not IsDBNull(oRdr("signature_path"))) Then sSignaturePath = oRdr("signature_path")
            If (Not IsDBNull(oRdr("defaultlocation_id"))) Then iDefaultLocationId = oRdr("defaultlocation_id")
            If (Not IsDBNull(oRdr("license_number"))) Then sLicenseNumber = oRdr("license_number")
            If (Not IsDBNull(oRdr("dea_number"))) Then sDeaNumber = oRdr("dea_number")
            If (Not IsDBNull(oRdr("session_timeout"))) Then iSessionTimeout = oRdr("session_timeout")
            If (Not IsDBNull(oRdr("password"))) Then sPassword = oRdr("password")

            If (Not IsDBNull(oRdr("password_date"))) Then dtPasswordDate = oRdr("password_date")
            If (Not IsDBNull(oRdr("date_login"))) Then dtDateLogin = oRdr("date_login")
            If (Not IsDBNull(oRdr("date_created"))) Then dtDateCreated = oRdr("date_created")
            If (Not IsDBNull(oRdr("date_modified"))) Then dtDateModified = oRdr("date_modified")

            If (Not IsDBNull(oRdr("caduceus"))) Then bCaduceus = oRdr("caduceus")
            If (Not IsDBNull(oRdr("emr"))) Then bEMR = oRdr("emr")
            If (Not IsDBNull(oRdr("active"))) Then bActive = oRdr("active")
            If (Not IsDBNull(oRdr("locked"))) Then bLocked = oRdr("locked")
        End While

        oRdr.Close()
        oRdr.Dispose()
        oCmd.Dispose()
    End If
End Sub
*/