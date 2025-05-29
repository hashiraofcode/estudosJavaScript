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