// O DOM é uma interface de programação para HTML
// Por meio dele temos Métodos para acessar a árvore de elementos
// O DOM fornece uma cópia do HTML
// Podemos manipular eventos pelo DOM para efetar o HTML

var itensClass = document.getElementsByClassName('item');
console.log(itensClass);

// Acessando com o querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista');
console.log(lista);

var primeiraLista = document.querySelector('ul')
console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');
console.log(span);




