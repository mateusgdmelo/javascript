// O DOM é uma interface de programação para HTML
// Por meio dele temos Métodos para acessar a árvore de elementos
// O DOM fornece uma cópia do HTML
// Podemos manipular eventos pelo DOM para efetar o HTML

//Acessando por tag
var titulo =  document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis);

//Acessando por id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//Acessando por class
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);

