// Por meio de JS podemos mapear algumas ações dos usuários, que chamamos de eventos
// Como: movimento de mouse, click, mouse entradno ou saindo de algum elemento, carregamento da página etc;
// E então criar comportamentos ineressantes como: animação de menu abrindo e fechando, etc.

// Evento Onload 

window.onload = function() {

    console.log('Carregou o Dom');
    var title2 = document.querySelector('#title');
    console.log(title2);

};

console.log('Carregou o JS');

var title = document.querySelector('#title');
console.log(title);