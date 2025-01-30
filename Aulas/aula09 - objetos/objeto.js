var obj = {
    nome: "Mateus", // propriedade o objeto
    idade: 28, // propriedade o objeto
    profissao: "Programador", // propriedade o objeto
    estarTrabalhando: true,
}; 

console.log(obj)
console.log(typeof obj)

console.log(obj.nome) // Acessando a propriedade o objeto
console.log(obj.idade) // Acessando a propriedade o objeto
console.log(obj.profissao) // Acessando a propriedade o objeto

console.log("O meu nome é " + obj.nome)

obj.nome = "Pedro"
obj.idade = 35
obj.profissao = "Desenvolvedor"

console.log(obj.nome) // Alterando as propriedades de um objeto
console.log(obj.idade) // Alterando as propriedades de um objeto
console.log(obj.profissao) // Alterando as propriedades de um objeto

console.log(obj)

obj.graduacao = true // Cria propriedades para o objeto que não havia antes
obj.salario = 25000 // Cria propriedades para o objeto que não havia antes

console.log(obj)