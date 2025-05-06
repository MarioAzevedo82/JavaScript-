function adicionarTarefa(){

    let tarefas = []
    
    const inputTarefa = document.getElementById("inputTarefa") 
    let tarefa = inputTarefa.value.trim() //remove os espaços em branco no início e no fim do código(trim = aparar)
    const mensagem = document.getElementById('mensagem')
    
    if(tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = '#A34743'
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = '#28A745'

        tarefas.push(tarefa)
    }
    
    inputTarefa.value = "" 

}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas") 

    //for itens na lista
    //1. item inicial (iterador)
    //2. item final (condição)
    //3.. se vai de 1 em 1 ou se pula
    
    //for(iterador; condição; frequência)
    let i = 0
    for (i; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li") 
        novaTarefa.textContent = tarefa 
        listaTarefas.appendChild(novaTarefa)
    }
}
renderizarTarefas()