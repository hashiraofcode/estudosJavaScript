// Arrays são variáveis onde podemos armazenar valores seja número, string,  ou objeto para utiliza-los mais tarde.
// ele funciona da seguinte  forma:
const exemplo = ["objeto1", "objeto2","objeto3"];


// E para chamar o item que você precisa basta  fazer a seguinte sintaxe:
console.log(exemplo[0])
// o array começa a contar o indereço de cada espaço de mémoria a partir do 0 por conta da linguagem binária da máquina.
// e para manipular o array você pode usar propriedades por exemplo para adicionar um item .push("item") e para deletar o item .pop(número do espaço de mémoria do item)
//Adicionando
exemplo.push("objeto4")
console.log(exemplo)
//Deletando
exemplo.pop(exemplo.length -1)
console.log(exemplo)
// neste caso eu utilizei uma outra propriedade de manipulação de array que é o .length que forne qual é o tamanho do  array e para acessar o ultimo espaço de memória eu diminuo 1, pois o array começa a partir do 0. Esta técnica é muito utilizada quando não sabemos qual é o  tamnho do array a ser manipulado  garantido uma dinamicidade maior.

// agora para saber qual é o numero do index de algo é só utillizar a propriedade .indesOf(valor) que ele irá fornecer qual é o número do espaço de memória.
console.log(exemplo.indexOf("objeto2"))

// Outra maneira de fazer iterações nos arrays que não seja através do for of e do .length é o for each que é uma propriedade que recebe uma função como callback e um parametro que vai ser o próprio item a ser manipulado pela função.
exemplo.forEach((item)=> {
    console.log(item)
})

// Para manipular um espaço de mémoria ja preenchido é só usar a sintaxe abaixo
exemplo[exemplo.length - 1] = "objeto4"
console.log(exemplo)

// Outros métodos para manipular array são o .unshift(item a ser adicionado) e o shift() 
// o .unshift adiciona itens no começo do array.
exemplo.unshift("objetoAntesDoPrimero")
console.log(exemplo)
// E o .shift deleta o primero item da array 
exemplo.shift()
console.log(exemplo)
// Estas são as principais maneiras de se manipular arrays
