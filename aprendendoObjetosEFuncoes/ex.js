// isto é um objeto, que nada mais é que uma váriavel que comportar outras variáveis que aqui são chamadas de propriedades e seus dados atribuidos são chamdos de valores
let mochila = {
    caneta: "azul",
    lapis: "rosa",
    ferramenta: "apontador",
    estojo: "lapis de cor"
}
// caso queira acessar uma propriedade especifica basta selecionar o objeto e colocar um ponto que você ja estara acessando dentro dele;
// ou caso queira deletar é sé executar uma palavra delete antes do objeto e sua propriedade
delete mochila.caneta
console.log(mochila)
console.log(mochila.estojo)
// Fazendo uma função que calcula o imc
function calculadorDeImc(height, weigth) {
 const fatorDeConvercao = 0.01
 height *= fatorDeConvercao
 let imc = weigth / (height * height)
 let resultado = `O valor do IMC deste indivíduo é ${imc}`
 return(resultado)
}
console.log(calculadorDeImc(183,96))

// outra maneira é misturando objetos e a manipulação dos mesmos
function calculadorDeImc2(person) {
 const fatorDeConvercao = 0.01
 let altura = person.height
 let peso = person.weight
 let idade = person.idade
 altura *= fatorDeConvercao
 let imc = peso / (altura * altura)
 let resultado = `O valor do IMC deste indivíduo é ${imc}`
 const isHealth = true
 return{
    nome: person.name,
    altura: `${altura}m`,
    peso: `${peso}Kg`,
    resultado,
    isHealth
 }
}
 let person = {
    name: "Fábio",
    height: 183,
    weight: 96,
    idade: 18,

 }
console.log(calculadorDeImc2(person))