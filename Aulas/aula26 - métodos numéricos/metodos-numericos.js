// parseFloat 10.02

console.log(parseFloat("12.5478"));
console.log(Number.parseFloat("15.8454946"));

// parseInt

console.log(parseInt("10"));
console.log(parseInt(16.7894));

// toFixed

console.log(23.5484454849.toFixed(1));
console.log(23.5484454849.toFixed(3));

// isNaN

console.log(isNaN("Teste"));
console.log(isNaN(12));
console.log(isNaN("14"));

// MAX-VALUE E MIN-VALUE    

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.7976931348623157e+308);

let teste = document.querySelector('#teste');

let x = 50;

teste.innerHTML = x.toString() + //retorna um número como uma string
"<br>" + x.toExponential() + //retorna uma string, com um número arredondado e escrito usando notação exponencial
"<br>" + x.toExponential(2) + //Um parâmetro opcional define o número de caracteres depois do ponto decimal
"<br>" + x.toFixed(3) + //retorna uma string, com o número escrito com um número especificado de decimais
"<br>" + x.toPrecision(6) + //retorna uma string, com um número escrito com um comprimento especificado
"<br>" + x.valueOf() //retorna um número como um número