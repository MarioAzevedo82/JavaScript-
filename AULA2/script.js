function adicionarTarefa(){
    //let mensagem = "Tarefa adicionada com sucesso!"
    
    let inputTarefa = document.getElementById("inputTarefa") //2 pegando a tarefa 
    let tarefa = inputTarefa.value // 3 pegando o valor do q foi digitado
    document.getElementById('mensagem').textContent = tarefa //4 expondo a tarefa

    let listaTarefas = document.getElementById("listaTarefas") // 6 criada a lista
    let novaTarefa = document.createElement("li")

    novaTarefa.textContent = tarefa

    listaTarefas.appendChild(novaTarefa)
    
    inputTarefa.value = "" // 5 zerar o campo input
  }