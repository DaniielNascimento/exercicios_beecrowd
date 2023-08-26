var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var funcionario = parseInt(lines.shift());
var horaTrabalhada = parseInt(lines.shift());
var valorHoraTrabalhada = parseFloat(lines.shift());

console.log('NUMBER = ' + funcionario);
console.log('SALARY = U$ '+ parseFloat(horaTrabalhada * valorHoraTrabalhada).toFixed(2));