// Conceito de Hoisting (Içamento) - as funções e variáveis são inicializadas no topo do código 
console.log(nome)
console.log(sobrenome)

var nome = null; // Null representa o vazio, ou nulo
var sobrenome; // Undefined significa que a variavel foi criada mas não possui nenhum valor.

console.log(nome)

nome = "Mateus"
console.log(nome)

console.log(sobrenome)