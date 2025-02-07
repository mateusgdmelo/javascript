function pesquisaBinaria (event) {
   event.preventDefault(); 

    var inicio = Number(document.querySelector('#inicio').value);
    var fim = Number(document.querySelector('#fim').value);
    var num = Number(document.querySelector('#num').value);
    var resposta = document.querySelector('#res');
    var meio = Math.floor((fim + inicio) / 2) // A fórmula para busca binária
    var cont = 1;

    if (num === meio) {
        resposta.innerHTML = `1º Tentativa. </br>`;
        resposta.innerHTML += 'O número selecioando precisou apenas de uma tentativa para ser encontrado.';
    } else {
        resposta.innerHTML = `1º Tentativa. </br>`;
        while (num !== meio) {

            if (num < meio) {
                fim = meio;
            } else if (num > meio){
                inicio = meio;

            }

            meio = Math.floor((fim + inicio) / 2);
            
            cont++;
            resposta.innerHTML += `${cont}º Tentativa. </br>`;
        };

        resposta.innerHTML += `O número selecionado precisou de ${cont} tentativas para ser encontrado.`;
    };
}