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

const listaDeFruta = fruteira.map((item) => ({Fruta: item, Qnt: numeroAleatorio(0,20) })
)  

// gerei uma lista de frutas que tem o nome e as quantidades de frutas que eu possuo no estoque agora quantas frutas eu tenho no total?

const contagemDeEstoque = listaDeFruta.reduce((previewValue, nextValue) => {
    return previewValue + nextValue.Qnt
}, 0)
// por conta da função número aleatório a quantidade nunca será igual, mas a funcionalidade do reduce está correta
console.log(`A quantidade total de frutas no estoque é: ${contagemDeEstoque}`)
// agora quais são as frutas?
const frutasNoEstoque = listaDeFruta.reduce((previwValue, nextValue) => {
    if(!previwValue.length) return nextValue.Fruta 
    return `${previwValue}, ${nextValue.Fruta}`
}, "")

console.log(`As frutas no estoque são: ${frutasNoEstoque}`)
// assim eu posso manipular strings também.

// Aprendendo .find
// O find pega um item de array que satisfaça sua condição, porém o primeiro a satisfazer essa condição será retornado e o resto do array nem se quer vai ser iterado.

// Por exemplo tenho uma caixa com bolas vermelhas e azuis  e eu quero selecionar de minha opção, eu posso usar o find para isso, pois eu quero qualquer bola vermelha ou azul e uma só então ele satisfaz a minha necessidade;

const caixa = ["vermelho", "azul","vermelho", "azul","vermelho", "azul","vermelho", "azul","vermelho", "azul","vermelho", "azul"]

const bolaColorida = caixa.find((item) => item === "vermelho")
console.log(bolaColorida)

//EXTRA OBJECT DESTRUTURING
// objeto destruturing é uma técnica de trazer todas as propriedades de um objeto ou todos os valores de uma lista.

// EX
const guardaRoupa = [
    {roupa: "meia", isDirty: true},
    {roupa: "blusa", isDirty: true},
    {roupa: "calça", isDirty: true},
    {roupa: "jaqueta", isDirty: true}
]

// caso eu queira manipular os objetos e adicionar uma novo propriedade a eles mas manter as outras eu posso fazer isso com map e object destruturing evitando o trabalho de atualizar o meu objeto na fonte

const guardaRoupaAtualizado = guardaRoupa.map((item) => ({...item, vestivel:true}))
console.log(guardaRoupaAtualizado)


// Aprendendo some e every
// some e every são propriedades que iteram sobre um array e a partir de uma analise sobre todos so itens com base em uma condição que você impõe;

const estoqueDeFrutas = ["morango", "banana", "uva", "maçã"]
// eu gostaria de saber se no meu estouque pussui alguma fruta além de morango e eu posso fazer isso utilizando o some, por que eu quero saber se tem uma fruta diferente e não se não há morangos

const temFrutaDiferente = estoqueDeFrutas.some((fruta) => fruta != "morango")
if (temFrutaDiferente == true) {
    console.log("Sim há frutas diferentes!!")
} 

// agora eu estou separando minhas frutas por caixas e gostaria de começar com a de morango e para isso todas as frutas tem que ser igual a morango 

const colocarFruta = (frutaDesejada, qntDesejada) => {
    if (typeof frutaDesejada === "string") {
        const caixaDefrutas = [];
        for (let i = 0; i < qntDesejada; i++) {
        caixaDefrutas.push(frutaDesejada)
    }
    return caixaDefrutas
   }
}
const conferindoCaixas = (caixa,fruta) => {
    const conferindo = caixa.every((item) => item === fruta)
    if (conferindo) {
        console.log("caixa correta!!!")
    } else console.log("Caixa incorreta!!!")
}

const caixaDeMorangos = colocarFruta("morango",20)
conferindoCaixas(caixaDeMorangos,"morango")
// mas e se a caixa pussuisse alguma fruta errada?
let caixaDePeras = null;
caixaDePeras = colocarFruta('pera', 30)
conferindoCaixas(caixaDePeras,"pera");

// ordenando listas com sort
// sort é uma propriedade do javaScript que manipula arrays de maneira a ordenar todos os itens;
// Caso queira ordenar em ordem crescente ou alfabética é só não definir nenhum argumento na propriedade.
const lista = [1,3,4,5,6,4,3,2,2,3,5,6,4,3,2];
const alfabeto = ["a","e","l","b","d","r"]
const listaOrdenada = lista.sort();
console.log(listaOrdenada)
const ordemAlfabetica = alfabeto.sort()
console.log(ordemAlfabetica)
// agora e se eu quiser em ordem decrescent? Para isso é só possar parametros para a função callback que você vai passar para a propriedade e fazer a função retornar a subitração dos dois;
const ordemDecrescente = lista.sort((firstValue, secundValue) => secundValue - firstValue)
console.log(ordemDecrescente)
// algo interressante é que essa função vê se o retorno da expreção da callback é positivo ou negativo por exemplo em uma situação onde 1-2 é -1 ele não muda pois supoe que o primeiro valor é menor do que o segundo e na sua lógica esta correto agora 3-2 é igual a 1 o que indica que o primeiro valor é maior do que o segundo então ele inverte. Mas a questão e na ordem decrescente? pois é se invertemos o valor das callbacks ele vai fazer o mesmo processo porém conforme vai se reorganizando e calculando os valore vão ser positivos fazendo com que ele inverta os valores.
