// Por meio de JS podemos mapear algumas ações dos usuários, que chamamos de eventos
// Como: movimento de mouse, click, mouse entradno ou saindo de algum elemento, carregamento da página etc;
// E então criar comportamentos ineressantes como: animação de menu abrindo e fechando, etc.

// Evento keydown
// O evento keydown é ativado quando uma tecla é pressionada;
// Podemos também atrelar o evento keyup para quando uma tecla volta a posição normal.

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if (event.key === 'Enter') {
        console.log('Clicou no enter!');
    };

});

// keyup
document.addEventListener('keyup', function(e){

    if(event.key === 'Enter') {
        console.log('Soltou o enter');
    };

});




