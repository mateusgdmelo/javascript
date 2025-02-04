let n = [8, 5, 1, 7, 10, 3, 4]
// percurso em vetores: 
for (let pos=0; pos<n.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}

n.sort((a, b) => a - b) // sort() ordena os valores como strings, resultando em uma ordem lexicográfica inadequada para números. Com função de comparação: sort((a, b) => a - b) realiza uma comparação numérica e garante a ordenação correta.
console.log("...")
// Percurso simplificado (for... in)
for (let pos in n) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}