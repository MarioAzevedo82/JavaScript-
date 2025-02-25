
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

        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)

    }   
    
    inputTarefa.value = ""

}