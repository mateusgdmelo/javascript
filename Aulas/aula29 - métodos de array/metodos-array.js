// length

var arr = [1,2,3,4,5,6];

console.log(arr.length);

// push - adiciona um elemento ao final

arr.push(7);
arr.push("Qualquer coisa");

console.log(arr);

// pop - remove um elemento do final

arr.pop();
console.log(arr);

// unshift - adiciona um elemento no início

arr.unshift(0);
arr.unshift("Teste");
console.log(arr);

// shift

arr.shift();
console.log(arr);

// Acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

