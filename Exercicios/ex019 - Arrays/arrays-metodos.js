//Declaração de Arrays
let frutas = ["maça", "pera", "uva"]
console.log(frutas)

frutas.push("manga") //adiciona no final
console.log(frutas)

frutas.unshift("Laranja") // adiciona o início
console.log(frutas)

frutas[5] = "Mexirica" // Outro método para adicionar elementos (adciona de acordo com a variável indicada)
console.log(frutas)

let númeroDePosições = frutas.length // Comprimento de um Array
console.log(`O vetor tem ${númeroDePosições} posições`)

frutas.pop() // remove o último elemento 
console.log(frutas)

frutas.shift() // remove o primeiro elemento
console.log(frutas)

frutas.sort() // ordena os valores como strings, resultando em uma ordem lexicográfica inadequada para números.
console.log(frutas)
let n = [8, 5, 4, 1, 6, 2, 9]
console.log(n)
n.sort() // sort() ordena os valores como strings, resultando em uma ordem lexicográfica inadequada para números.
console.log(n)

let contem = n.indexOf(8) // procura pelo valor especificado (no caso, 8) e retorna o índice dele, o seu "endereço".
console.log(contem) 
contem = n.indexOf(3)
console.log(contem) // Se não há o valor especificado retorna -1.