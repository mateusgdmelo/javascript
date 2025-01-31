function primeiraFuncao() {

    console.log("Hello world das funções.");
}

primeiraFuncao();

function dizerNome(nome) {

    console.log("O nome é: " + nome);
};

dizerNome("Mateus");
dizerNome("Pedro");
dizerNome("Xavier");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 3);
console.log(somaUm);

var somaDois = soma (4, 9);
console.log(somaDois);