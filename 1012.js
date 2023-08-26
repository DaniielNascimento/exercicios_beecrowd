var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

console.log('TRIANGULO: ' + ((a * c)/2).toFixed(3));
console.log('CIRCULO: ' + (3.14159 * c**2).toFixed(3));
console.log('TRAPEZIO: ' + ((a + b) * c/2).toFixed(3));
console.log('QUADRADO: ' + (b**2).toFixed(3));
console.log('RETANGULO: ' + (a * b).toFixed(3));