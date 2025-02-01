let pessoa = {
    nome: "Mateus",
    idade: 28,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
        return a+b;
    },
    profissao: "Programador"
};

console.log(pessoa);
console.log(pessoa.nome);
pessoa.falar();
var soma = pessoa.soma(2, 3);
console.log(soma);