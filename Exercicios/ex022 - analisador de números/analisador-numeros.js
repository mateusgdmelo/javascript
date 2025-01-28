var lista = document.querySelector('#lista')
var res = document.querySelector('#resFinal')
var valores = []

function incluaNum() {
    let num = Number(document.querySelector('#num').value)
    if (validacao(num)) {
        let opt = document.createElement('option')
        opt.innerHTML = `O número escolhido foi ${num}.`
        lista.appendChild(opt)
        valores.push(num)
        res.innerHTML = ""
    } else {
        window.alert(`[ERRO] Você escolheu um número inválido ou repetido. Tente novamente`)
    }
}

function validacao(n) {
    //verificar se o número está entre 1 e 100
    if (n < 1 || n > 100) {
        return false
    }
    // verifica se o número já foi digitado
    if (valores.indexOf(n) !== -1) {
        return false
    }
    return true
}

function resultado() {
    var tot = valores.length
    var soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    var media = soma / tot
    var maior = Math.max(...valores)
    var menor = Math.min(...valores)
    res.innerHTML = `Você selecionou um total de ${tot} valores.<br>`
    res.innerHTML += `A soma desses elementos é ${soma}.<br>`
    res.innerHTML += `A média desses elementos é ${media}.<br>`
    res.innerHTML += `O maior valor encontrado foi ${maior}.<br>`
    res.innerHTML += `O menor valor encontrado foi ${menor}.<br>`
}