// O for...in é usado para iterar sobre as propriedades enumeráveis de um objeto.
/*
for (variável in objeto) {
    // código a ser executado
}
*/

let pessoa = {nome: "João", idade: 25, cidade: "São Paulo"}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}