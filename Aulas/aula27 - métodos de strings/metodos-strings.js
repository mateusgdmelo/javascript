let teste = document.querySelector('#teste');

let meuNome = "Mateus Gomes de Melo";

teste.innerHTML = meuNome + 
"<br>" + meuNome.charAt(0) + //retorna o caractere em um índice especificado
"<br>" + meuNome.length + //retorna o comprimento de uma string
"<br>" + meuNome.charCodeAt(5) +//retorna o código UTF-16 do caractere em um índice especificado 
"<br>" + meuNome.at(2) + //retorna o caractere em um índice especificado;
"<br>" + meuNome[3] + //também retorna um caractere de acordo com o índice especificado, como se fosse um array
"<br>" + meuNome.slice(6, 15) + //extrai parte de uma string e retorna a parte extraída em uma nova string
"<br>" +  meuNome.substring(0, 6) + //é semelhante a slice()
"<br>" + meuNome.substr(7, 6) + //é semelhante a slice(), A diferença é que o segundo parâmetro especifica o comprimento da parte extraída 
"<br>" + meuNome.toLocaleLowerCase() + //Uma string é convertida para minúsculas
"<br>" + meuNome.toUpperCase() + //Uma string é convertida para maiúsculas
"<br>" + meuNome.concat(" ", " é o meu nome!") + //concatena duas ou mais strings
"<br>" + meuNome.trim() + //método remove espaços em branco de ambos os lados de uma string
"<br>" + meuNome.trimStart() + //remove os espaços em branco somente do início de uma string
"<br>" + meuNome.trimEnd() + //remove os espaços em branco somente do final de uma string
"<br>" + meuNome.padStart(30, "oi") + //preenche uma string com outra string (várias vezes) até atingir um determinado comprimento a partir do inicio
"<br>" + meuNome.padEnd(30, "oi") + //preenche uma string com outra string (várias vezes) até atingir um determinado comprimento a partir do final
"<br>" + meuNome.repeat(3) + //retorna uma string com um número de cópias de uma string
"<br>" + meuNome.replace("Gomes", "Souza") + //substitui um valor especificado por outro valor em uma string, esse método substitui apenas a primeira correspondência
"<br>" + meuNome.replaceAll("e", "x") + //Já sse método substitui todas as correspondências 
"<br>" + meuNome.indexOf("Gomes") //retorna o índice da primeira ocorrência do parâmetro passado; 

console.log(teste);