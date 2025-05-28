// Aprendendo sobre estruturas de controle if/else que permitem ao meu código tomar decisões a partir de operações lógicas de maneira que ele se torne mais
let idade = 18
if (idade => 18) {
    console.log("Você está autorizado a ingerir bebida alcoolica")
} else {
    console.log("você ainda não pode ingerir alcool")
}

// nos também podemos fazer um estrutura de validação de forma que varias decisões possam ser tomadas a partir de checagem diferentes

let hora = 12
if (hora >= 6 && hora < 12) {
    console.log("Bom dia!!")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!!")
} else if (hora >= 18 && hora < 24) {
 console.log("Boa noite!!")
} else if(hora == 0) {
    console.log("Está ficando tarde")
} else if (hora < 6 && hora > 0) {
    console.log("É madrugada o que você está fazendo acordado??? ;-;")
} else {
    console.log("essa hora tá certa??? ;-;")
}