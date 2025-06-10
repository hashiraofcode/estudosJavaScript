// Promeses são entre muitas aspas códigos em segundo plano, você vai definir uma uma tarefa a ser executada como uma promise e ele vai fazer a execução  deste código e vai continuar a execução do resto do programa. Ele vai retornar algo e você vai poder utilizar este retorno para fazer algo de acordo com o resultado.

// console.log("Fiz um pedido na minha lanchonete favorita")

//  const promessa = new Promise((resolve,reject) => {
//     const pedidochegou = true
//     setTimeout(() => {
//         if (pedidochegou) {
//             resolve("Seu pedido chegou")
//         } else {
//             reject("infelizmente seu pedido não chegou")
//         }
//     }, 10000);
// })

// promessa
//     .then((mensagem) => {console.log(mensagem)})
//     .catch((erro) => {console.log(erro)})

// exercício prático: ESCREVA UM CÓDIGO QUE CRIE UMA PROMISE QUE SIMULA UMA OPERAÇÃO DE BUSCAR DADOS EM UM SERVIDOR SE OS DADOS FOREM ENCONTRADOS A PROMISE DEVE SER RESOLVIDA; SE NÃO DEVE SER REJEITADA;

const bancoDeDados = {
    hardware: ["memória", "SSD","Processador"],
    software: ["sistema operacional", "navegador"]
}

const promiseBD = new Promise((resolve,reject) => {
    setTimeout(() => {
        if (bancoDeDados.hardware.length === 3 && bancoDeDados.software.length === 2) {
            resolve("Máquina completa")
        } else reject("maquina incompleta")
    }, 5000);
})

promiseBD
    .then((mensagem) => {console.log(mensagem)})
    .catch((erro) => {console.log(erro)})

