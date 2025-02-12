var numero = 5;
console.log(numero);
console.log(typeof numero);

var float = 5.23;
console.log(float);
console.log(typeof float);

//NaN é uma palavra reservada do JavaScript que indica que um número não é um número real
console.log(NaN); 
console.log(typeof NaN);
console.log(100*"olá") //Tentar fazer aritmética com uma string não numérica resultará em NaN(Não é um número)

console.log(typeof +Infinity);
console.log(typeof -Infinity);

// Números extragrandes ou extrapequenos podem ser escritos com notação científica (expoente)
let teste = document.querySelector('#teste');
let a = 3145634e5
let b = 13684365e-10

teste.innerHTML = `${a} <br> ${b} <br>` 