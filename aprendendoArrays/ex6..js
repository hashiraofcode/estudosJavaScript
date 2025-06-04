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
    if (item === "objeto1") {
        let itemQuevaiSerMudado = exemplo.indexOf(item)
        exemplo[itemQuevaiSerMudado] = "Não existe mais este objeto"
    }
})
console.log(exemplo)
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

// Aprendendo .map
// Esta propriedade serve para percorrer o array e modificar os itens dele. Ela funciona com imutabilidade isso quer dizer que a modificação que ela faz não altera o array original, mas sim gera uma nova lista com as mudanças que dissemos para ela fazer.
// diferente do for eache ela retorna algo...

const valor = exemplo.map((item) => (
    {ProdutoEvalor: `${item} = R$ 299,00` }
))

console.log(valor)
//_____________________________________________________________________________________________________
// no exemplo acima ela pegou todos os item e trasformou em um objeto contendo a propriedade ProdutoEvalor com o item e um preço fixo  através do map eu peguei uma lista existente e fiz uma nova lista com os valores da antiga modificados.

// Outra propriedade importante para manipulação de arrays é o .filter 
// Ele serve para pegar os itens de acordo com uma condição pré-definida e gera uma nova lista com os mesmos
const fruteira = ["morango","banana","maçã","manga","kiwi","uva","pessego",]
//utilizando .map
const novaFruteira = fruteira.map((fruta) => (
    {fruta:fruta}
))
//ultilizando o .filter fazendo uma função chamada suco ela será responsavel por pegar uma fruta e fazer um suco dela
const fruitJuice = (fruteira,fruta) => {
     const ArrayFruta = fruteira.filter((item) => {
        return item.fruta === fruta
     })
     const  frutaSelecionada = ArrayFruta[0].fruta
    console.log(`Suco de ${frutaSelecionada}`)
}
const frutaPedida = "pessego"
fruitJuice(novaFruteira,frutaPedida)
//------------------------------------------------------------------------------------------------------------

//Aprendendo o .reduce; Essa propriedade tem como objetivo trasformar os itens de um array em um item só; Por exemplo: vou pegar e fazer o uso do map para trasformar o meu array de frutas em uma lista com a quantidade de cada fruta e aplicar o reduce para somar elas e saber qual é a quantidade total de frutas.
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const listaDeFruta = fruteira.map((item) => {
    return  {Fruta: item, Qnt: 0 }
})