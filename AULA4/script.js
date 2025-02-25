let tarefas = []

function adicionarTarefa(){
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    
    const msn = document.getElementById("mensagem")
    
    if (tarefa == "") {
        let mensagemErro = "Digite uma mensagem para adicioná-la!"
        msn.textContent = mensagemErro
        
    } else {  
        let mensagem = "Tarefa adicionada com sucesso!";
        msn.textContent = mensagem;
        tarefas.push(tarefa)
        renderizarTarefas()
    }   
    
    inputTarefa.value = ""

}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""
    // for itens na lista
    //1. item inicial (iterador)
    //2. item final (condicional)
    //3. se vai de 1 em 1 elemento ou se pula

    //for (iterador, condição, frequencia)

    let i = 0
    for (i; i < tarefas.length; i++) {   
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}