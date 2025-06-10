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
// outro exercício proposto foi fazer um sistema de pagamento utilizando a assincronicidade do código vou tentar replicar aqui de cabeça;

console.log("fazendo pedido")
// fiz um exercício colocando em prática o aprendizado de primises e de encadeamento de thens
// testando encadeamento
const promessaDeSalgado = new Promise((resolve,reject) => {
    const salgado = true;
    console.log (`Tem salgado: ${salgado ? "sim" : "não"}`);
    

    setTimeout((() => {
        if(salgado) {
            resolve({pedidoFeito: true, status:"Fritando Salgado"});
        } else reject("Não temos salgado volte mais tarde");
    }),5000);
});

const promessaDeEmbalar = (pedido) => {
   return new Promise((resolve,reject) => {
        console.log("Conferindo se o pedido está pronto");
       


        setTimeout(() => {
            if (pedido.pedidoFeito) {
                resolve({embalado: true, status: "pronto"});
            } else reject("algo deu errado no preparo. Entre em contato com um de nossos atendentes");
        },5000);
    });
};

console.log("Fazendo meu pedido")

promessaDeSalgado
    .then((pedido) => {
    console.log("Seu pedido foi feito com sucesso");
    return promessaDeEmbalar(pedido)
    })
    .then((entrega) => {
        console.log(entrega)
        const resultadoDoPedido = entrega.embalado ? true: false;
        if(resultadoDoPedido) {
            console.log("Seu pedido está a caminho")
        }
    })
    .catch((erro) => {
        console.log(erro)
    });
 



