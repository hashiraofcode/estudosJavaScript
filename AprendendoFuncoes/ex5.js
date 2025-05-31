//funções são blocos de código que realizam uma tarefa especifica e podem ser reutilizados em outras partes do meu programa.
// sua estrutura é 
// function fazAlgo(parametro,parametro,...) {
//     //faz o código
// }

//fazendo uma função que soma algo
let listaDeValores = [12, 23, 45, 6, 5, 3, 22, 1112, 33354, 1112, 33345, 332, 1123, 3321]
function soma(listaDeValores) {
    let total = 0;
    for (let valor of listaDeValores) {
        total = total + valor
    }
    return total
}

console.log(soma(listaDeValores))

//função que verifica se um número é impar ou par
function parOuImpar(number) {
    return number % 2 === 0
}

console.log(parOuImpar(2))