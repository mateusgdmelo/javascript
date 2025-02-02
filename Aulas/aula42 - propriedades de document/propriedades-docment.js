// propriedades document

console.log(document.body);
console.log(document.head);

// acessando links da página criados com <a></a>

console.log(document.links);

document.links[0].textContent = 'Twitter';

console.log(document.URL); // mostra o caminho da página

console.log(document.title);
document.title = 'Aula 42';
console.log(document.title);