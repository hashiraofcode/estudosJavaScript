// os laços e iterações são funcionalidades importatntes do javaScript, pois através deles nós podemos repetir estruturas de código de maneira dinâmica
// for (variavel; condição a ser atendida; incremento) {
//     codigo
// }
// esta é a estrutura do laço for que serve para executar um código por um número predefinido de vezes, de maneira que enquanto a variavel satisfaça a operação lógica o código continua sendo repetido.
// Montando um exemplo fazendo um programa para calcular a tabuada do 1 ao 10;
for (let numero = 1; numero <= 10; numero++) {
    console.log(`Tabuada do ${numero}\n`)
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`)
    }
     console.log("\n")
}
// Neste código eu fiz um programa capaz de fazer a tabuada do 1 ao 10 de maneira completamente dinâmica e autonoma. Para isso eu fiz laço que seria responsavel por forncer o valor principal da tabuada e dentro dele fiz um laço que utilizaria desse valor do primeiro laço e repetiria e multiplicaria ele pelos valores de um a dez isso fez com que o programa automaticamente fizesse a tabuada do 1 ao 10;

//while
// este laço tem o objetivo de ser utilizado quando não se tem certeza sobre a quantidade de vezes a ser repetido, por isso sua sintaxe é apenas a condição sem incremento;
// while (condição) {
//     codigo
// }

let numero = 1
while (numero <= 5) {
    console.log(numero)
    numero++
}
// do while
// diferente do while o do ele é executado pelo menos uma vez antes de entrar no laço, uma vez que no while não é garantida a execução no mínimo uma vez;]
console.log("--------------------------------------------")
let numero2 = 0;
do {
    numero2++
    console.log(numero2)
}while(numero2 < 5)

// for in
// o for in é muito util quando precisamos percorrer um objeto e fazer verificações em suas propriedades que não sabemos quantas e quais são 
// Sua sintaxe é a palavra separada for (chave in objeto) a chave equivale as propriedades dos objetos e objeto o mesmo em si, assim ele percorre por todas as propriedades de um objeto de maneira dinâmica.

let comprimentos = {
    manha: "bom dia",
    tarde: "boa tarde",
    noite: "boa noite",
}

for (let key in comprimentos) {
    console.log(comprimentos[key])
}
// aplicando de maneira prática o for in
let tasks = {
    "Passear com o dognho 🐶": true,
    "Ir para a academia 🏋️‍♀️": false,
    "Estudar 📚": true,
    "Jogar 🎮": false,
}

for (let key in tasks) {
    console.log(`A tarefa ${key} está: ${tasks[key] ? "Concluída":"Ainda não fiz 😜"}`)
}
//for of
// O for of tem o mesmo objetivo do for in passar por todas as propriedades de um objeto, porém em uma lista. Com isso quero dizer que a mesma finalidade que o for in tem nos objetos o for of tem nos arrays.
// ele é utilizado apenas para iterar sobre arrays, caso tente fazer com que ele itere sobre um objeto o console ira retornar um erro.

let cart = [
    {name: "cortina", price: 230},
    {name: "carrinho", price: 290},
    {name: "cobertor", price: 395}
]
let total = 0;
for (let CartItem of cart) {
    console.log(CartItem.price)
    total = total + CartItem.price
}

 console.log(total)