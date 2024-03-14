// Import and create object that refers the module
const jsConvert = require('js-convert-case');

var  str   = "welcome to Node Programs";
var result   = jsConvert.toCamelCase(str);
console.log(result);