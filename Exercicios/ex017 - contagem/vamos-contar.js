
function contador (event) {
    event.preventDefault()
    var ini = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var p = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('p#resultado')

    res.innerHTML = "Contando... <br>"

    if (p===0) {
        window.alert('Olá, você digitou um valor inválido para o passo. Estamos considerando que seja 1.')
        p = 1
    }

    if (ini < fim) {
        if (p>0) {
            while (ini <= fim) {                
                res.innerHTML += `${ini}\u{1F449} `
                ini += p
            }        
        } else {
            p *= -1
            while (fim >= ini) {               
                res.innerHTML += `${fim}&#x1F449 `
                fim -= p
            }        
        }
    } else if (ini > fim) {
        if (p>0) {
            while (ini >= fim) {               
                res.innerHTML += `${ini}&#x1F449 `
                ini -= p
            }
        } else {
            p *= -1
            while (ini >= fim) {
                res.innerHTML += `${ini}&#x1F449 `
                ini -= p
            }
        }
    } 
    res.innerHTML += `Fim &#x1F6D1`

} 
