function adicionarTarefa(){
    let mensagem = "Tarefa adicionada com sucesso!"//1, 9 fianl descomenta 
    
    
    let inputTarefa = document.getElementById("inputTarefa") //2
    let tarefa = inputTarefa.value //2
    document.getElementById("mensagem").textContent = mensagem //1, 3 qndo colocou tarefa ao invés de mensagem
    
    let listaTarefas = document.getElementById("listaTarefas") // 5 criando a lista
    let novaTarefa = document.createElement("li") // 6 criando os elementos da lista li

    novaTarefa.textContent = tarefa // 8 o valor digitado vai pra dentro da li

    listaTarefas.appendChild(novaTarefa) // 7 colocou o li dentro do ul
    //console.log(listaTarefas)

    inputTarefa.value = "" // 4 limpar o campo automaticamente
}


