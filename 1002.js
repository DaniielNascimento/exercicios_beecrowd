var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var raio = parseFloat(lines.shift())

console.log("A=" + (3.14159 * raio**2).toFixed(4))