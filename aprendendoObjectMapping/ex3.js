// o objecting mapping é uma opção ao switch, ele consegue retornar variáveis de acordo com o que é pedido. a sintaxe é nome do objeto[nomeDaVariavel]. Ele é muito utilizado atualmente no mercado de trabalho e é uma alternativa menos trabalhosa e que permite uma melhor manutenção;
// para colocar em prática decide fazer uma estrutura que retorna um comprimento de acordo com o horário para isso estou reutilizando a estrutura if/else do outro código que vai fazer a função do relógio, e vou fazer uma função que vai retornar o o comprimento, além disso também vou aplicar a boa prática de dicionario como vi na aula anterior no final a partir de um horário ele ira me retornar um comprimento completo sem a estrutura de switch para manipular o a informação recebida da forma que eu pretender.
// função que vai fazer a verificação do horário
let HOUR_DICT = {
        MORNING: "MORNING",
        AFTERNOON: "AFTERNOON",
        NIGHT: "NIGHT",
        MIDNIGHT: "MIDNIGHT",
        DAWN: "DAWN",
}
function relogioStatus(hora) {
    if (hora >= 6 && hora < 12) {
    return  HOUR_DICT.MORNING
} else if (hora >= 12 && hora < 18) {
    return HOUR_DICT.AFTERNOON
} else if (hora >= 18 && hora < 24) {
   return HOUR_DICT.NIGHT
} else if (hora == 0) {
    return HOUR_DICT.NIGHT
} else if (hora < 6 && hora > 0) {
    return HOUR_DICT.DAWN
}
}

// fazendo o object mapping
function returnComprimento(RELOGIO_STATUS) {
    return {
        [HOUR_DICT.MORNING]: "Bom dia, caro amigo S2",
        [HOUR_DICT.AFTERNOON]: "Bom tarde, caro amigo S2",
        [HOUR_DICT.MIDNIGHT]: "Esta ficando tarde, vá dormir!!!",
        [HOUR_DICT.DAWN]: "Oque você ainda esta fazendo acordado? ;-;", 
    }[RELOGIO_STATUS] || "insira um horário correto"
}

// fazendo a função que vai retornar o comprimento

function COMPRIMENTANDO_UM_AMIGO(HORARIO) {
    let RELOGIO_STATUS = relogioStatus(HORARIO)
    let comprimento = returnComprimento(RELOGIO_STATUS)
    return comprimento
}

const agora = 222
console.log(COMPRIMENTANDO_UM_AMIGO(agora))

console.log(relogioStatus(222))
