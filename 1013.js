var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

var x = (a + b + Math.abs(a - b))/2;

console.log(((x + c + Math.abs(x - c))/2).toFixed(0) + ' eh o maior');