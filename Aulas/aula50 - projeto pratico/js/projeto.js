// função que adiciona tarefa 
function addTarefa() {
    const titulo = document.querySelector('#caixa-selecao').value;

    if(titulo === '') {
        window.alert('Por favor, inclua uma tarefa para continuar.');
    } else {
        //clona template
        const template = document.querySelector('.template');
        const novaTarefa = template.cloneNode(true); //novaTarefa é um clone de template que captura uma <li>

        //adiciona titulo
        novaTarefa.querySelector('.titulo-tarefa').textContent = titulo; // novaTarefa seleciona um elemento filho através de uma class e altera o seu texto interno

        //remover as classes desnecessárias
        novaTarefa.classList.remove('template');
        novaTarefa.classList.remove('hide');

        //adiciona tarefa na lista
        const lista = document.querySelector('#tarefas'); //seleciona a <ul> elemento pai das <li> e por conseguinte da variável novaTarefa

        lista.appendChild(novaTarefa); 

        // adicionar evento de remover
        novaTarefa.querySelector('.remove-btn').addEventListener('click', function(){
            removerTarefa(this);
        }); //novaTarefa seleciona outro elemento filho através de uma class, o botão de check, e atribui a ele um evento 'click'

        // adiciona função de completar
        novaTarefa.querySelector('.done-btn').addEventListener('click', function(){
            concluirTarefa(this);
        }); //novaTarefa seleciona outro elemento filho através de uma class, o botão de excluir, e atribui a ele um evento 'click'

        //limpar texto
        document.querySelector('#caixa-selecao').value = ''
    }
}

function removerTarefa(excluir) {
    excluir.parentNode.parentNode.remove(); // com dois parentNode podemos acessar o elemento pai do elemento pai
}

function concluirTarefa(concluir) {
    const tarefaConcluida = concluir.parentNode.parentNode;

    tarefaConcluida.classList.toggle('done'); // toggle() funciona como se fosse um if. Se existe a propriedade 'done' ele remove, senão existe ele a cria. 
}


// evento de adicionar tarefa
const botaoAdd = document.querySelector('#btn-terefa');

botaoAdd.addEventListener('click', function(e) {
    e.preventDefault(); //evita o envio do formulário
    addTarefa();
});