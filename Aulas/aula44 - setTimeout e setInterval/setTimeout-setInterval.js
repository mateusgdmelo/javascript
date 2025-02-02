// Podemos com estas funções criar ações no software que executam depois de tempo ou de tempos em tempos
// Um dos argumentos desse função é uma callback function

// setTimeout
console.log('Antes do setTimeout.');

setTimeout(function() {

    console.log('Testando o setTimeout.');

}, 2000);

console.log('Depois do setTimeout.');

//setInterval

setInterval(function() {

    console.log('Testando setInterval')

}, 2000);