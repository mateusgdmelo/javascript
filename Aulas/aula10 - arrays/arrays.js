//É uma prática comum declarar arrays com a palavra chave const
const ARR = [5, "Mateus", true, {idade: 28, salario: 20000, profissao: "Programador"}, true, false,];
console.log(ARR)

//Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas
const ARR2 = [2,
    3,
    4,
    5,
    6,
    7,
    8,
]
console.log(ARR2)

//Você também pode criar uma matriz e então fornecer os elementos depois
const ARR3 = [];
ARR3[0] = "Banana";
ARR3[1] = "Maçã";
ARR3[2] = "Uva";
console.log(ARR3);

console.log(ARR3[0]) //Você acessa um elemento de matriz consultando o número do índice

ARR3[1] = "Maracujá"; //Esta declaração altera o valor do segundo elemento em 
console.log(ARR3);

console.log(typeof ARR) //Arrays são um tipo especial de objetos. O typeofoperador em JavaScript retorna "object" para arrays

let teste = document.querySelector('#teste');
teste.innerHTML = ARR3.length +//A lengthpropriedade de um array retorna o comprimento de um array (o número de elementos do array)
"<br>" + ARR3[0] +//Acessando o primeiro elemento do array
"<br>" + ARR3[ARR3.length - 1] +//Acessando o Último Elemento do Array
"<br>" + ARR3.push("Laranja") + //adiciona um novo membro a um array
"<br>" + ARR3[3] +
"<br>" + Array.isArray(ARR3) //use Array.isArray() para verificar se uma variável e um array

//Matrizes e objetos aninhados
//Valores em objetos podem ser matrizes, e valores em matrizes podem ser objetos
const myObj = {
    nome: "Mateus",
    idade: 28,
    carros: ["Mercedes", "Fusca", "Jeep", "Camaro"],
    profissao: "Programador",
}

teste.innerHTML += "<br>" + myObj.carros

const myArray = [
    {nome: "Pedro", idade: 20, carro: "Variante"},
    {nome: "Marcos", idade: 50, carro: "Opala"},
    {nome: "Alfredo", idade: 15, carro: "Gol"},
]

teste.innerHTML += "<br>" + myArray[2].nome