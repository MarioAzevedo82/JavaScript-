
function adicionarTarefa(){
    
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

        const listaTarefas = document.getElementById("listaTarefas") 
        let novaTarefa = document.createElement("li") 
        novaTarefa.textContent = tarefa 
        listaTarefas.appendChild(novaTarefa) 
    }
    
    inputTarefa.value = "" 

  }