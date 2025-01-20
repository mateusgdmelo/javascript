var fundo = document.querySelector('body#fundo')
var apresentacao = document.querySelector('div#apresentação')
var imagem = document.createElement('img')
apresentacao.appendChild(imagem)

function inicio () {
    fundo.style.background = '#0F8B8D' //altera o fundo ao carregar
    imagem.src = 'imagens/menino.png' //Define imagem inicial
    imagem.alt = 'foto de menino'
}

function verificar (event) {
    event.preventDefault()
    var anoAtual = new Date().getFullYear()
    var anoNas = document.querySelector('input#Inas')
    anoNas = Number(anoNas.value)
    var idade = anoAtual-anoNas
    var varSexo = document.querySelector('input.varSexo:checked').value
    var frase = document.querySelector('p#frase')

    if (varSexo == "masculino") {
        fundo.style.background = '#0F8B8D'
        if (idade <= 10) {
            imagem.src = 'imagens/menino.png'
            imagem.alt = 'foto de menino'
        } else if (idade < 30 ) {
            imagem.src = 'imagens/homem-jovem.png'
            imagem.alt = 'foto de adolescente'
        } else {
            imagem.src = 'imagens/homem-adulto.png'
            imagem.alt = 'foto de homem adulto'
        }
        frase.innerHTML = `<p>Identificamos um homem com ${idade} anos de idade.</p>`
    } else {
        fundo.style.background = '#FF2ECC'
        if (idade <= 10) {
            imagem.src = 'imagens/menina.png'
            imagem.alt = 'foto de menina'
        } else if (idade < 30) {
            imagem.src = 'imagens/mulher-jovem.png'
            imagem.alt = 'foto de adolescente'
        } else {
            imagem.src = 'imagens/mulher-adulta.png'
            imagem.alt = 'foto de mulher adulta'
        }
        frase.innerHTML = `Identificamos uma mulher com ${idade} anos de idade.`
    }
}