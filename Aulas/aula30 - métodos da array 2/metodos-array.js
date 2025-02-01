// splice - adiciona elementos entre os índices

var arr = [1,2,3,4,5];
console.log(arr);

arr.splice(2, 0, 999);
console.log(arr);

arr.splice(4, 1);
console.log(arr);

//indeOf - retorna o indice do array

console.log(arr.indexOf(5));

// join

var arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" "));

// reverse
console.log(arr2.reverse());
