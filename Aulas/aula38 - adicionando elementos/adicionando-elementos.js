// criar elemento
var el = document.createElement('div');
el.classList = "div-criada";
console.log(el);

var conteiner = document.querySelector('#conteiner')
conteiner.appendChild(el)

// inserBefore - insere antes

var el2 = document.createElement('div');
el2.classList = "div-before";
console.log(el2);

var divDoContainer = document.querySelector('#conteiner .div-criada')
conteiner.insertBefore(el2, divDoContainer);
