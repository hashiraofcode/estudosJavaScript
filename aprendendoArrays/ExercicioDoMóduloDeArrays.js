//Cria uma to list 
// todas as tarefas devem pussuir nome descrição e status
//adicione novas tarefas
// remova tarefas concluídas
// e marque tarefas como concluidas

let toDoList = [];

const criaUmaNovaTarefa = (descricao,estado,prioridade) => {
    //modelo que retorna prioridade
    const modeloPrioridade = (valor) => ({3: "baixa Prioridade", 2:"média Prioridade", 1: "Prioridade máxima"}[valor]) 
    // Esta condição verifica se esta tudo correto 
    if (
        typeof descricao === "string" &&  
        (estado === "concluido" || estado === "não concluido") && 
        descricao != null && 
        descricao.length != 0 &&
        typeof prioridade === "number"&&
        prioridade <= 3 &&
        prioridade >= 0
) {
        return { 
            descricao: descricao, 
            estado:estado, 
            prioridade: modeloPrioridade(prioridade)
        }
    }
}
const adicionaUmaNovaTarefa = (lista, descricao,estado,prioridade) => {
    const novaTarefa = criaUmaNovaTarefa(descricao,estado,prioridade)
    if (novaTarefa) return lista.push(novaTarefa)
}

adicionaUmaNovaTarefa(toDoList,"passear","concluido",2)
adicionaUmaNovaTarefa(toDoList,"andar","concluido",2)
adicionaUmaNovaTarefa(toDoList,"cozinhar","não concluido",2)
adicionaUmaNovaTarefa(toDoList,"jogar","não concluido",2)
adicionaUmaNovaTarefa(toDoList,"dormir","concluido",2)

// console.log(toDoList)

//filtra as tarefas concluidas

const tarefasAFazer = toDoList.filter((item) => item.estado === "não concluido")
console.log("Tarefas a fazer")
//console.log(tarefasAFazer)

// marcando uma tarefa como concluída

const marcandoComoConcluida = (lista, descricao) => {
    lista.forEach((item) => {
        if (item.descricao === descricao) {
            item.estado = "concluido"
        }
    })
}
marcandoComoConcluida(tarefasAFazer,"posar")

// console.log(tarefasAFazer)

const novaLista = tarefasAFazer.filter((item) => item.estado === "não concluido")

//Contar tarefas não concluídas
const contarTarefasNConcluidas = (lista) => {
    const contador = lista.reduce((previousValue,nextValue) => {
        return previousValue + (nextValue.estado === "não concluido" ? 1 : 0)
    },0)
    return contador
}
console.log(novaLista)
console.log(contarTarefasNConcluidas(novaLista))



