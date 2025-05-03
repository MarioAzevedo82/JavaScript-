
function adicionarTarefa(){
    
    let inputTarefa = document.getElementById("inputTarefa") 
    let tarefa = inputTarefa.value.trim() //remove os espaços em branco no início e no fim do código(trim = aparar)
    
    if(tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la!"
        document.getElementById('mensagem').textContent = mensagemErro
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        document.getElementById('mensagem').textContent = mensagemSucesso
        let listaTarefas = document.getElementById("listaTarefas") 
        let novaTarefa = document.createElement("li") 
        novaTarefa.textContent = tarefa 
        listaTarefas.appendChild(novaTarefa) 
    }
    
    inputTarefa.value = "" 

  }