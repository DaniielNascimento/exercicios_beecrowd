var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');

var cod1 = line1.shift();
var quant1 = parseInt(line1.shift());
var valor1 = parseFloat(line1.shift());

var cod2 = line2.shift();
var quant2 = parseInt(line2.shift());
var valor2 = parseFloat(line2.shift());

console.log('VALOR A PAGAR: R$ '+ (quant1 * valor1 + quant2 * valor2).toFixed(2))