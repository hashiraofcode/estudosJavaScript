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

// console.log(parOuImpar(2))

// Fazendo um contador regressivo utilizando uma função e o setInterval. setInterval é uma função do javaScript que recebe uma função e uma quantidade de tempo (em milisegundos) como argumentos; Assim ele executa a função passada de acordo com a quantidade de tempo desejado;
// Esta função serve para se caso eu quiser colocar o tempo em segundos e ele é trasformado em milisegundos para satisfazer o argumento da função;

let getTimeMillisecunds = function (timeInSec) {
    return timeInSec * 1000
}

//função que vai fazer o timer
function timer(tempo) {
    let getTempo = tempo
    let intervalTime = setInterval(function () {
        console.log(getTempo)
        if (getTempo === 0) {
            clearInterval(intervalTime)
        } else {
            getTempo--
        }
    }, getTimeMillisecunds(1))
}


// importante para quando queromos executar algo mais de uma vez com um intervalo de tempo; também podemos fazer com que ele pare utilizando a função clearIntarval() que recebe o setInterval em questão como argumento. E para especificar qual intervalo estamos falando colocamos ele dentro de uma variavel. e utilizamos um condicional para decidir de forma dinâmica quando devemos para o timer.