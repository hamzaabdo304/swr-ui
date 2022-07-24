"use strict";
exports.__esModule = true;
var user_name = "ali";
var phone = 2157452;
var some = "any value";
var data = ["moha", "ali", "omer"];
var st_address = [123, 547, 6987];
var y = [45, "", 6865];
function setname() {
    alert("name");
}
function getsalary() {
    return "salary is";
}
function dataany() {
}
var users = /** @class */ (function () {
    function users(r) {
        this.data = '';
        this.data = r;
    }
    users.prototype.getdata = function () {
        return "data json";
    };
    return users;
}());
exports.users = users;
