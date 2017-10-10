// Constructor
function Result(service) {
    // always initialize all instance properties
    this.type = service;
    this.status = Boolean;
    this.count = Number;
    this.message = String;
    this.key = String;
    this.data = Object;
}
// class methods
//Foo.prototype.fooBar = function() {

//};
// export the class
module.exports = Result;