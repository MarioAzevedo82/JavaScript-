function adicionarTarefa(){
    let mensagem = "Tarefa adicionada com sucesso!"
    document.getElementById('mensagem').textContent = mensagem //1 mensagem de sucesso

    let inputTarefa = document.getElementById("inputTarefa") //2 pegando a tarefa 
    let tarefa = inputTarefa.value // 3 pegando o valor do q foi digitado
  }