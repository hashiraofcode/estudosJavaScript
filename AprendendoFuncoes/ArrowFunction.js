// arrow functions são funções remasterizadas introduzidas em 2015 visando facilitar a leitura e execução dos códigos.
//refatorando o timer para deixar o código mais conciso facilitando a leitura e diminuindo a complexidade do código.
// não necessariamente precisamos colocar return para retornar algo caso o código seja conciso podemos colocar para o resultado da expresão ser retornado diretamente;

const getTimeSecunds = (timeInSecunds) => timeInSecunds * 1000;
const FUNCAO_QUE_E_EXECUTADA_ASSIM_QUE_A_OUTRA_ACABA = () => console.log("Acabou o tempo!!!!")

const ContadorEngine = (time, callback) => {
    let tempoDoContador = time;
    const atualizaContadorRegressivo = setInterval(() => {
        console.log(tempoDoContador)
        if (tempoDoContador === 0) {
            clearInterval(atualizaContadorRegressivo)
            // Aqui está o callback
            callback()
        } else {
            tempoDoContador--
        }
    }, getTimeSecunds(1))
}

const startTemporizador = (time, callback) => ContadorEngine(time, callback)

startTemporizador(10,FUNCAO_QUE_E_EXECUTADA_ASSIM_QUE_A_OUTRA_ACABA)

// este programa tem a mesma função do outro porém neste eu estou usando arrow functions ao inves da sintaxe normal com isso chegamos a conclusão que de fato  ela deixou a função final muito mais concisa quando aplicada sua outra técnica de retorno o que facilita a leitura;

// callbacks são funções que são executadas assim que um evento se encerra para isso devemos passar a função a ser executada como argumento para a função que não sabemos quando não vai mais ser executada, assim podemos definir o que vai ser feito assim que ela acabar. 

// acabo de alterar o código acima para demosntrar uma callback