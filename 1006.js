var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

console.log('MEDIA = '+ ((a * 2 + b * 3 + c * 5)/10).toFixed(1));