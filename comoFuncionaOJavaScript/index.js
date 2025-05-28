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
// função que classifica o imc
function classificandoImc(imc) {
   if (imc < 18.5) {
      return "Abaixo do peso"
   } else if (imc > 18.5 && imc < 25) {
      return "Peso normal"
   } else if (imc > 25 && imc < 30) {
      return "Sobrepeso"
   } else {
      return "Obesidade"
   }
}

// outra maneira é misturando objetos e a manipulação dos mesmos
function calculadorDeImc2(person) {
 const fatorDeConvercao = 0.01
 let altura = person.height
 let peso = person.weight
 let idade = person.idade
 altura *= fatorDeConvercao
 let imc = peso / (altura * altura)
 let classificacao = classificandoImc(imc)
 let resultado = `O valor do IMC deste indivíduo é ${imc}`
 const isHealth = true
 return{
    nome: person.name,
    altura: `${altura}m`,
    peso: `${peso}Kg`,
    resultado,
    classificacao,
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
// eu posso colocar funções dentro de outras e utilizar os dados dentro das mesmas como parâmetro com o pórem de que a função que você vai utilizar já esteja criada quando você precisar dela em outra parte posterior do código caso a função em que você vai emprega-la seja anterior vai dar erro, pois essa função não exitiria.