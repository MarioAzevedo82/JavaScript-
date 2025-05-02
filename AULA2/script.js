function adicionarTarefa(){
    let mensagem = "Tarefa adicionada com sucesso!"
    
    let inputTarefa = document.getElementById("inputTarefa") //2 pegando a tarefa 
    let tarefa = inputTarefa.value // 3 pegando o valor do q foi digitado
    document.getElementById('mensagem').textContent = mensagem //4 expondo a tarefa //10 volta a mensagem de sucesso

    let listaTarefas = document.getElementById("listaTarefas") // 6 criada a lista
    let novaTarefa = document.createElement("li") // 7 cria o li

    novaTarefa.textContent = tarefa // 8 colocando no li o conteudo de texto da tarefa

    listaTarefas.appendChild(novaTarefa) // 9 adiciona o elemento filho (li com o valor de tarefa)
    
    inputTarefa.value = "" // 5 zerar o campo input
  }