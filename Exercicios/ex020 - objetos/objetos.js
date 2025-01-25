// Declarando objetos: 
let pessoa = {
    nome: "Mateus",
    idade: 28,
    profissao: "Programdor",
    salario: 25000
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.salario)
console.log("...")

pessoa.nome = "Mateus Melo"
pessoa.idade = 30
pessoa.profissao = "DEV Sênior"
pessoa.salario = 30000
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.salario)
console.log("...")
pessoa.altura = 1.75 // Adiciona propriedades
console.log(pessoa.altura)

delete pessoa.profissao
console.log(pessoa.profissao)