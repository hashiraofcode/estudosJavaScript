//Escreva um laço for que imprime os números pares de 2 a 20 no console.
function exercicio1() {
     for (let i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
//--------------------------------------------------//
//Escreva um laço for que imprime a tabuada do 5 (5, 10, 15, ..., 50).
function exercicio2() {
    for (let i = 5; i <= 50; i++) {
    console.log(`Tabuada do ${i}\n`)
    for (let numero = 1; numero <= 10; numero++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }
    console.log("----------------------------------------")
    }
}
//-----------------------------------------------------------//
// Crie um laço for que calcula e imprime a soma dos números de 1 a 100.

function exercicio3() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total = total + i;
        console.log(total)
    }
}
 
//--------------------------------------------------------------//
//Escreva um laço while que imprime apenas os números ímpares de 1 a 20.

function exercicio4() {
    let i = 0;
    while (i <= 20) {
        if (i % 2 != 0){
            console.log(i)
        }
        i++
    }
}
//---------------------------------------------------------------------//

// exercício extra: Dado array com objetos contendo o nome de frutas dentro dele você deve percorer por todos os objetos no array e pegar o nome de cada uma usando o for, while e o for of
let listaDeFrutas =  [
    {name:"banana"},
    {name:"maça"},
    {name:"morango"},
    {name:"kiwi"},
    {name:"laranja"},
    {name:"limão"},
    {name:"manga"},
]

function usandoFor(listaDeFrutas) {
    for (let i = 0; i < listaDeFrutas.length; i++) {
        console.log(listaDeFrutas[i].name)
    }
}

function usandoWhile(listaDeFrutas) {
    let i = 0;
    while (i < listaDeFrutas.length) {
        console.log(listaDeFrutas[i].name)
        i++
    }
}

function usandoForOf(listaDeFrutas) {
    for (let fruit of listaDeFrutas) {
        console.log(fruit.name)
    }
}

usandoForOf(listaDeFrutas)
