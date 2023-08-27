var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift();
var line2 = lines.shift();

line1 = line1.split(' ');
line2 = line2.split(' ');

var x1 = parseFloat(line1.shift());
var y1 = parseFloat(line1.shift());

var x2 = parseFloat(line2.shift());
var y2 = parseFloat(line2.shift());

var distancia = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1/2);

console.log(distancia.toFixed(4));