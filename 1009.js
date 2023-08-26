var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vendedor = lines.shift();
var salario = parseInt(lines.shift());
var totalVendas = parseFloat(lines.shift());

console.log('TOTAL = R$ '+ parseFloat(salario + totalVendas * 0.15).toFixed(2));