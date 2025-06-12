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
    hardware: ["memória", "SSD", "Processador"],
    software: ["sistema operacional", "navegador"]
}

const promiseBD = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (bancoDeDados.hardware.length === 3 && bancoDeDados.software.length === 2) {
            resolve("Máquina completa")
        } else reject("maquina incompleta")
    }, 5000);
})

promiseBD
    .then((mensagem) => { console.log(mensagem) })
    .catch((erro) => { console.log(erro) })
// outro exercício proposto foi fazer um sistema de pagamento utilizando a assincronicidade do código vou tentar replicar aqui de cabeça;

console.log("fazendo pedido")
// fiz um exercício colocando em prática o aprendizado de primises e de encadeamento de thens
// testando encadeamento
const promessaDeSalgado = new Promise((resolve, reject) => {
    const salgado = false;
    console.log(`Tem salgado: ${salgado ? "sim" : "não"}`);


    setTimeout((() => {
        if (salgado) {
            resolve({ pedidoFeito: true, status: "Fritando Salgado" });
        } else reject("Não temos salgado volte mais tarde");
    }), 5000);
});

const promessaDeEmbalar = (pedido) => {
    return new Promise((resolve, reject) => {
        console.log("Conferindo se o pedido está pronto");



        setTimeout(() => {
            if (pedido.pedidoFeito) {
                resolve({ embalado: true, status: "pronto" });
            } else reject("algo deu errado no preparo. Entre em contato com um de nossos atendentes");
        }, 5000);
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
        const resultadoDoPedido = entrega.embalado ? true : false;
        if (resultadoDoPedido) {
            console.log("Seu pedido está a caminho")
        }
    })
    .catch((erro) => {
        console.log(erro)
    });

// fazendo um desafio simulando um login com api

// objeto com o login do usuário;
const login = {
    email: "admin123@gmail.com",
    password: "2345"
}

// promessa que recebe e verifica os dados do usuario
let count = 0;
let sucesso = false;
const userVerify = () => {
    return new Promise((resolve, reject) => {
        if (count > 0) {
            sucesso = true;
        } else count++
        setTimeout(() => {
            if (sucesso) {
                resolve("Verificado")
            } else reject("Email ou senha incorreto!!!")
        }, 2000);
    });
};

// Promessa que verifica se o email do user é verdadeiro e retorna se á entrada
const getUserData = (situation) => {
    return new Promise((resolve, reject) => {
        const userData = { nome: "Cleber", idade: 23, "Profissão": "Motorista" };
        setTimeout(() => {
            if (situation === "Verificado") {
                resolve(`Bem vindo!!! \n NOME: ${userData.nome} \n IDADE:${userData.idade} \n MOTORISTA:${userData.Profissão}`)
            } else reject("dados do usuário não encontrado");
        }, 1500);
    });
};

const getUserPermitions = (email) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (email === login.email) resolve(["admin", "editor"])
            else reject("Usuário não reconhecido...");
        }, 2000);
    });
};

// manipulando as promessas
userVerify()
    .then((situation) => {
        return getUserData(situation);
    })
    .then((menssagem) => {
        console.log(menssagem)
        return getUserPermitions(login.email)
    })
    .then((autorizations) => {
        console.log(autorizations)
    })
    .catch((error) => {
        console.log(error)
        userVerify()
            .then((situation) => {
                return getUserData(situation)
            }).then((menssagem) => {
                console.log(menssagem)
                return getUserPermitions(login.email)
            })
            .then((autorizations) => {
                console.log(autorizations)
            })
            .catch(console.log)
    })