var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var h = parseInt(lines.shift());
var v = parseInt(lines.shift());

console.log(((h * v)/12).toFixed(3));