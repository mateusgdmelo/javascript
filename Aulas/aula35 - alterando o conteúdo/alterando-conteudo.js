// Selecionar o elemento
var title = document.querySelector('#title');
console.log(title);

// innerHTML
title.innerHTML = "Testando o texto alterado!"

// textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);
subtitle.textContent = "Testando o textContent."