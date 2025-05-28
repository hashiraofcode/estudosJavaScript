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
} else if (hora == 0) {
    console.log("Está ficando tarde")
} else if (hora < 6 && hora > 0) {
    console.log("É madrugada o que você está fazendo acordado??? ;-;")
} else {
    console.log("essa hora tá certa??? ;-;")
}

// aprendendo a estrutura de controle switch, que funcioana de uma maneira diferente do if/else. A estrutura em questão pode especificar o que se é esperado da condicao como um valor string por exemplo, o que o diferencia do if/else que faz uma relação entre dois dados pretendendo obter uma resposta de verdadeiro ou falso o que permite um comparação mais ampla, ja no switch os possiveiss resultados e suas respostas tem que ser especificados.

let bebidaEscolhida = "fanta"
switch (bebidaEscolhida) {
    case "Coca-cola": console.log("mandando Coca-cola")
        break;
    case "fanta": console.log("mandando fanta")
        break;
    case "pepsi": console.log("mandando pepsi")
        break;
    default:
        console.log("água")
}

let diaDaSemana = "quarta"
switch (diaDaSemana) {
    case "segunda": console.log("hoje é dia de Cappuccino")
        break;
    case "terça": console.log("hoje é dia de Latte")
        break;
    case "quarta": console.log("hoje é dia de Moccha")
        break;
    case "quinta": console.log("hoje é dia de Expresso")
        break;
    case "sexta": console.log("hoje é dia de Macchiato")
        break;
    case "sábado":
    case "domingo": console.log("hoje é dia de Café especial")
    break;
    default: console.log("Dia da semana inválido")
}
// no desenvolvimento é muito comum que o back-end crie status ao invês de a informação propriamente esperada, na maioria das vezes por conta de uma questão de organização, seja por questão do idioma em que a aplicação esta sendo desenvolvida que esta diferente dos valores no banco de dados. Por isso é muito comum que retornem estatus e nós do front utilizamos o swich para retornar o que precisamos a partir deste.