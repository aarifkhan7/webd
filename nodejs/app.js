var a = function (){
    console.log("A function is called!");
}
var b = function (){
    console.log("B function is called!");
}

module.exports = {
    a: a, 
    b: b
};

console.log(module.exports);

module.exports.c = function (){
    console.log("C function is called!");
}

console.log(module.exports);

var _ = require('underscore');
console.log(_.min([1, 2, 3, -5]));