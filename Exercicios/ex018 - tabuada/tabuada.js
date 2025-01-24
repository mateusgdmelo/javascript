function tabuada (event) {
    event.preventDefault()
    let n = Number(document.querySelector('input#num').value)
    let res = document.querySelector('div#tabuada')
    let tab = 0
    if (n === 0) {
        window.alert(`Impossível gerar a tabuada de 0. Vamos considerar a tabuada de 1. Mas escolha um número válido.`)
        n=1
    }
    res.innerHTML = ""
    for (let v=1; v<=10; v++) {
        tab = n*v
        res.innerHTML += `${n}x${v}=${tab}<br>`
    }
}