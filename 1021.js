var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift());
var cedulas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:');
for(var i of cedulas){
    console.log(Math.floor(valor / i) + ' nota(s) de R$ ' + i.toFixed(2));
    valor = valor % i; 
}

valor = valor + 0.00001;
console.log('MOEDAS:');
for(var i of moedas){
    console.log(Math.floor(valor / i) + ' moeda(s) de R$ ' + i.toFixed(2));
    valor = valor % i;
}

