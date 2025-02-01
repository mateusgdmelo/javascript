// Inserir o elemeto no body
var novoParagrafo = document.createElement('p');
console.log(novoParagrafo);

var texto = document.createTextNode('Este é o conteúdo do parágrafo.');
novoParagrafo.appendChild(texto);

var body = document.querySelector('body');
console.log(body);

body.appendChild(novoParagrafo);

// Inserir em um conteiner 

var conteiner = document.getElementById('conteiner');

console.log(conteiner);

var el = document.createElement('span');
el.appendChild(document.createTextNode("Texto do span."));

console.log(el);

conteiner.appendChild(el);
