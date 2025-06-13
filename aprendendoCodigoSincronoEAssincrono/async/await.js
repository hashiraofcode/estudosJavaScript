// Fazendo o  mesmo exercícios de promise mas agora utilizando async awit.
// Async await é a maneira mais moderna de se escrever código assincrono que o mercado exige. É uma maneira consisa e mais legivel ja que eu escrevo a manipulação dessas promises de uma maneira mais parecida com o código sincrono.
// uma função async sempre retorna uma promise. Como essa ja faz isso não a necessidade de colocar a palavra async.
const promessaDeSalgado = () => new Promise((resolve, reject) => {
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
// para tratar os erros de uma promise em async/await nos temos que fazer uso do método de tratamente try/catch que é como se fosse o .then e .catch ele tenta executar algo caso não de ele executa o reject e isso vale para todo o fluxo de promises mesmo que uma esteja interligada a outra;
try {
    const pedidoDeSalgado = await promessaDeSalgado();
    const embalando = await promessaDeEmbalar(pedidoDeSalgado);
    console.log(embalando)
} catch (error){
    console.log(error)
}

