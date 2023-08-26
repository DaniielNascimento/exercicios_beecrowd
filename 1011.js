var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());

console.log('VOLUME = ' + ((4/3) * 3.14159 * r**3).toFixed(3))