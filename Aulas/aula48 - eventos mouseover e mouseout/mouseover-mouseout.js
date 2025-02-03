// Por meio de JS podemos mapear algumas ações dos usuários, que chamamos de eventos
// Como: movimento de mouse, click, mouse entradno ou saindo de algum elemento, carregamento da página etc;
// E então criar comportamentos ineressantes como: animação de menu abrindo e fechando, etc.

// Evento mouseover
var title = document.querySelector('#title');

title.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'yellow';

});

// evento mouseout
title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'white';

});

// afetar outro elemento com mouseover 
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('mouseover', function() {
    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');
});

subtitle.addEventListener('mouseout', function() {
    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide');
});




