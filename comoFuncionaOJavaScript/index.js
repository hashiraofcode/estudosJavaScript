// fazendo um evendo no navegador
function aoClicar() {
    console.log("Olá de volta")
}

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

//# a terceira mudança que eu vou fazer no código, aprendi sobre estruturas de controle if/else e como fazer escolhas a partir de operções lógicas permitindo que o código tome decisões de maneira dinâmica;