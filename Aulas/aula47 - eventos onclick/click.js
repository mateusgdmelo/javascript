// Por meio de JS podemos mapear algumas ações dos usuários, que chamamos de eventos
// Como: movimento de mouse, click, mouse entradno ou saindo de algum elemento, carregamento da página etc;
// E então criar comportamentos ineressantes como: animação de menu abrindo e fechando, etc.

// Evento click
var btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('click', function() {

    console.log('Clicou');
    console.log(this);
    btn.style.color = 'red';

});

// click afetando outros elementos
var title = document.querySelector('#title');

title.addEventListener('click', function() {

var subtitle = document.querySelector('.subtitle');
subtitle.style.display = 'none';

});

// double click
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('dblclick', function() {

    console.log('Click duplo!')

});
