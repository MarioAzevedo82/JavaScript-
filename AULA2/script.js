function adicionarTarefa(){
    //let mensagem = "Tarefa adicionada com sucesso!"
    
    let inputTarefa = document.getElementById("inputTarefa") //2 pegando a tarefa 
    let tarefa = inputTarefa.value // 3 pegando o valor do q foi digitado
    document.getElementById('mensagem').textContent = tarefa //4 expondo a tarefa

    inputTarefa.value = "" // 5 zerar o campo input
  }