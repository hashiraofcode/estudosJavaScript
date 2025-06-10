// setTimeOut tem a função de executar um código depois de um tempo previsto definido em milisegundos, muito utilizada em programação assincrona onde a gente precisa que o código continue rolando mesmo sem executar um trecho ou um bloco ou também até um conjunto de funções. Os mesmos só serão executados após expirar a contagem da função
console.log("em dois segundos comprimente o meu amigo")

setTimeout(() => {
    console.log("olá amigo")
}, 2000)

