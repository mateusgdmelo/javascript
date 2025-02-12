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

// Métodos de pesquisa de strings
"<br>" + meuNome.indexOf("e") +//retorna o índice (posição) da primeira ocorrência de uma string em uma string, retorna -1 se a string não for encontrada
"<br>" + meuNome.indexOf("e", 12) + //Ambos os métodos aceitam um segundo parâmetro como posição inicial para a pesquisa
"<br>" + meuNome.lastIndexOf("e") +//retorna o índice da última ocorrência de um texto especificado em uma string, retorna -1 se a string não for encontrada
"<br>" + meuNome.lastIndexOf("e", 10) + //Ambos os métodos aceitam um segundo parâmetro como posição inicial para a pesquisa
"<br>" + meuNome.search("de") + //método pesquisa uma string (ou uma expressão regular) e retorna a posição da correspondência (obs.: não aceita um segundo argumento de posição inicial)
"<br>" + meuNome.match("me") +//retorna uma matriz contendo os resultados da correspondência de uma string com uma string (ou uma expressão regular)
"<br>" + meuNome.match(/me/) + // com uma expressão regular
"<br>" + meuNome.toLowerCase().match(/me/g) +//Realiza uma busca global por "me"
"<br>" + meuNome.match(/me/gi) +//Execute uma busca global, sem distinção entre maiúsculas e minúsculas, por "me"
"<br>" + meuNome.matchAll("me") +//método retorna um iterador contendo os resultados da correspondência de uma string com uma string (ou uma expressão regular), também funcina com os mesmos parâmetros de expressões regulares que match()
"<br>" + meuNome.includes("Mateus") +//Retorna verdadeiro se uma string contiver um valor especificado. Caso contrário, ele retorna false
"<br>" + meuNome.includes("Mateus", 12) + //Comece na posição 12
"<br>" + meuNome.includes("Paulo") +
"<br>" + meuNome.startsWith("Mateus") +//retorna true se uma string começa com um valor especificado, caso contrário, ele retorna false
"<br>" + meuNome.startsWith("Gomes", 7) +//Uma posição inicial para a pesquisa pode ser especificada
"<br>" + meuNome.startsWith("Gomes") +
"<br>" + meuNome.endsWith("Melo") +//retorna true se uma string termina com um valor especificado, caso contrário retorna false
"<br>" + meuNome.endsWith("Gomes", 12) +//Verifique se os 12 primeiros caracteres de uma string terminam com "world"
"<br>" + meuNome.endsWith("Gomes") +
 
console.log(teste);