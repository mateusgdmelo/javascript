const arr = [1,2,3,4,5,6];
const arr2 = ["Banana", "Pera", "Uva", "Maçã"];
const arr3 = [[1,2], [3,4], [5,6], [7,8]];
console.log(arr3);

console.log(arr.length); //retorna o comprimento (tamanho) de um Array

document.querySelector('#teste').innerHTML =
arr2.toString() +//converte uma matriz em uma sequência de valores de matriz (separados por vírgula)
"<br>" + arr2.join(" * ") + //também une todos os elementos do array em uma string. Ele se comporta exatamente como toString(), mas além disso você pode especificar o separador
"<br>" + arr.concat(arr2) +//O concat()método cria uma nova matriz mesclando (concatenando) matrizes existentes
"<br>" + arr2.copyWithin(2, 0) +//copia elementos do array para outra posição em um array (Copiar para o índice 2 todos os elementos do índice 0)
"<br>" + arr3.flat() +//cria uma nova matriz com elementos de submatriz concatenados a uma profundidade especificada
"<br>" + arr.flatMap(x => [x, x * 10])

const frutas = ["Morango", "Pera", "Jaca"];
teste.innerHTML += "<br>" + frutas.splice(2, 0, "Limão", "Kiwi") //O splice()método pode ser usado para adicionar novos itens a uma matriz, o primeiro parâmetro (2) define a posição onde novos elementos devem ser adicionados (emendados), o segundo parâmetro (0) define quantos elementos devem ser removidos, os demais parâmetros ("Limão", "Kiwi") definem os novos elementos a serem adicionados
+ frutas

frutas.splice(0, 1) // Com a configuração inteligente de parâmetros, você pode usar splice()para remover elementos sem deixar "buracos" na matriz. O primeiro parâmetro (0) define a posição onde novos elementos devem ser adicionados (emendados). O segundo parâmetro (1) define quantos elementos devem ser removidos . O restante dos parâmetros são omitidos. Nenhum novo elemento será adicionado.
teste.innerHTML += "<br>" + frutas

teste.innerHTML += "<br>" + frutas.slice(2) //divide um pedaço de uma matriz em uma nova matriz (Corte uma parte de uma matriz começando pelo elemento 1 da matriz ("Kiwi"))
teste.innerHTML += "<br>" + frutas.slice(1, 3) //O slice()método pode receber dois argumentos como slice(1, 3), o método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final

console.log(arr.at(4)) //retorna um elemento indexado de uma matriz.

arr.push(7); //push - diciona um novo elemento a um array (no final)
arr.push("Qualquer coisa");
console.log(arr);

arr.pop(); //pop - remove o último elemento de uma matriz
console.log(arr);

arr.unshift(0); //unshift - adiciona um novo elemento a um array (no início) e "desloca" elementos mais antigos
arr.unshift("Teste");
console.log(arr);

arr.shift(); //shift - remove o primeiro elemento do array e "desloca" todos os outros elementos para um índice mais baixo
console.log(arr);

console.log(arr[arr.length - 1]); //Acessar o último elemento

console.log(Array.isArray(5)); //isArray
console.log(Array.isArray(arr));

//Métodos de busca e localização de matriz
let position = arr.indexOf(5); //pesquisa um valor de elemento em uma matriz e retorna sua posição, retorna -1 se o item não for encontrado
teste.innerHTML += "<br>" + position
let ultimaOcorrencia = arr2.lastIndexOf("Pera"); //Array.lastIndexOf()é o mesmo que Array.indexOf(), mas retorna a posição da última ocorrência do elemento especificado.
teste.innerHTML += "<br>" + ultimaOcorrencia
let estaPresente = arr2.includes("Banana"); //Permite verificar se um elemento está presente em um array (incluindo NaN, diferente de indexOf), retorna true se estiver presente
teste.innerHTML += "<br>" + estaPresente
let funcaoFind = arr.find(myFunction); //retorna o valor do primeiro elemento da matriz que passa em uma função de teste
let funcaoFindIndex = arr.findIndex(myFunctionIndex); //retorna o índice do primeiro elemento da matriz que passa por uma função de teste
function myFunction(value, index, array) {
    return value > 4;
};
function myFunctionIndex(value, index, array) {
    return value > 5;
};
teste.innerHTML += "<br>" + funcaoFind 
teste.innerHTML += "<br>" + funcaoFindIndex
let finalLast = arr.findLast(x => x > 5); //começará no final de um array e retornará o valor do primeiro elemento que satisfizer uma condição.
teste.innerHTML += "<br>" + finalLast
let finalLastIndex = arr.findLastIndex(x => x > 5); //O método findLastIndex() encontra o índice do último elemento que satisfaz uma condição
teste.innerHTML += "<br>" + finalLastIndex