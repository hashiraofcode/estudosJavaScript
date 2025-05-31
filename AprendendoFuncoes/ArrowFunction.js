// arrow functions são funções remasterizadas introduzidas em 2015 visando facilitar a leitura e execução dos códigos.
//refatorando o timer para deixar o código mais conciso facilitando a leitura e diminuindo a complexidade do código.
// não necessariamente precisamos colocar return para retornar algo caso o código seja conciso podemos colocar para o resultado da expresão ser retornado diretamente;

const getTimeSecunds = (timeInSecunds) => timeInSecunds * 1000;

const ContadorEngine = (time) => {
    let tempoDoContador = time;
    const atualizaContadorRegressivo = setInterval(() => {
        console.log(tempoDoContador)
        if (tempoDoContador === 0) {
            clearInterval(atualizaContadorRegressivo)
            console.log("Fim da contagem!!!!")
        } else {
            tempoDoContador--
        }
    }, getTimeSecunds(1))
}

const startTemporizador = (time) => ContadorEngine(time)

startTemporizador(10)

// este programa tem a mesma função do outro porém neste eu estou usando arrow functions ao inves da sintaxe normal com isso chegamos a conclusão que de fato  ela deixou a função final muito mais concisa quando aplicada sua outra técnica de retorno o que facilita a leitura;