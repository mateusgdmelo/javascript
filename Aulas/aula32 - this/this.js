// Fora de escopos locais o this sempre se refere ao objeto global Window;
// Em objetos o this vai se referir a instância e pode acessar suas propriedades;

var teste = 5;

console.log(this);
console.log(this.teste)

let pessoa = {
    nome: "Mateus",
    idade: 29,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log(`O meu nome é ${this.nome}.`);
    },
    aniversario: function() {
       this.idade += 1;
    },
    saudacao: function() {
        return `Sr. ${this.nome}.`;
    },
};

pessoa.dizerNome();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log(`Olá ${sdc}`)