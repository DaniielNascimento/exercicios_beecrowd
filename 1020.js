var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

console.log(Math.floor(valor/365) + ' ano(s)');
console.log(Math.floor(valor % 365/30) + ' mes(es)');
console.log(Math.floor(valor % 365 % 30) + ' dia(s)');