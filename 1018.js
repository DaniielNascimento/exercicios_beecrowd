var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for(var i of cedulas){
    console.log(Math.floor(valor / i) + ' nota(s) de R$ ' + i + ',00' );
    valor = valor % i;
}
