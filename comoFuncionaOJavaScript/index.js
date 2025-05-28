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
      return "UNDERWEIGTH"
   } else if (imc > 18.5 && imc < 25) {
      return "REGULAR"
   } else if (imc > 25 && imc < 30) {
      return "OVERWEIGTH"
   } else {
      return "OBESITY"
   }
}
let IMC_STATUS_DICT = {
   UNDERWEIGTH: "UNDERWEIGTH",
   REGULAR: "REGULAR",
   OVERWIGTH: "OVERWEIGTH",
   OBESITY: "OBESITY",
}
// switch que pega os dados do back e trasforma eles na informação que preciso
   function GET_IMC_STATUS(classificacao) {
      switch (classificacao) {
         case IMC_STATUS_DICT.UNDERWEIGTH: return "Esta pessoa está abaixo do peso"
         break;
         case IMC_STATUS_DICT.REGULAR: return "Esta pessoa está no seu peso ideal"
         break;
         case IMC_STATUS_DICT.OVERWIGTH: return "Esta pessoa está acima do peso"
         break;
         case IMC_STATUS_DICT.OBESITY: return "Esta pessoa se encontra num grau de obesidade"
         break;
         default: return "Verifique as informações preenchidas"
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
 let getImcStatus = GET_IMC_STATUS(classificacao)
 let resultado = `O valor do IMC deste indivíduo é ${imc}`
 const isHealth = true
 return{
    nome: person.name,
    altura: `${altura}m`,
    peso: `${peso}Kg`,
    resultado,
    getImcStatus,
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

// no desenvolvimento é muito comum que o back-end crie status ao invês de a informação propriamente esperada, na maioria das vezes por conta de uma questão de organização, seja por questão do idioma em que a aplicação esta sendo desenvolvida que esta diferente dos valores no banco de dados. Por isso é muito comum que retornem estatus e nós do front utilizamos o swich para retornar o que precisamos a partir deste.

// Outra prática comum no desenvolvimento é a criação de dicionarios para evitar erros de escrita e assim causar um bug no código. É considerado uma boa prática.
// let cardapio = { 
 // MOCCHA: "MOCCHA"
 // LEITE : "leite"
//}
// a organização do objeto vai depender muito da escrita que o seu código precisa para funcionar desde que não esteja errado não há problema