var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

console.log(Math.floor(valor/3600) + ':' + Math.floor(valor % 3600/60) + ':' + valor % 3600 % 60);