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
   return (resultado)
}
console.log(calculadorDeImc(183, 96))
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
   return {
      [IMC_STATUS_DICT.UNDERWEIGTH]: "Esta pessoa está abaixo do peso",

      [IMC_STATUS_DICT.REGULAR]: "Esta pessoa está no seu peso ideal",

      [IMC_STATUS_DICT.OVERWIGTH]: "Esta pessoa está acima do peso",

      [IMC_STATUS_DICT.OBESITY]: "Esta pessoa se encontra num grau de obesidade",


   }[classificacao] || "Verifique as informações preenchidas"
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
   return {
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
// atraves do dicionário eu facilito a manutenção do código, visto que uma vez que eu preciso mudar um valor eu altero ele apenas em um lugar e dinâmicamente ele já esta alterado em todo o resto do código em que ele é utilizado o que evita um possível bug e uma grande dor de cabeça para descobrir em que ponto ele esta.
// Troque a estrutura do switch por um object mapping que executa a mesma função porém é melhor para escalabilidade e manutenção do código, ou seja, uma boa e moderna prática para o mercado


// desafio contar vogais
   // object mapping


/*
const contarVogais = (palavra) => {
   const objetoVogais = { 
            "a": 0,
            "e": 0,
            "i": 0,
            "o": 0,
            "u": 0,
            "Qnt de vogais":0      
   }
   if (typeof palavra === "string"){
      let valor = 0;
      for (let letra of palavra) {
         if (letra === "a" || letra === "i" || letra === "e" || letra === "o" || letra === "u") {
            objetoVogais[letra] = objetoVogais[letra] + 1;
            valor = valor + 1;
         };
      };
        objetoVogais["Qnt de vogais"] = valor;
        return `As vogais da palavra são:\n 
        a: ${objetoVogais["a"]}\n 
        e: ${objetoVogais["e"]}\n 
        i: ${objetoVogais["i"]}\n 
        o: ${objetoVogais["o"]}\n 
        u: ${objetoVogais["u"]}\n 
        Quantidade de vogais totais: ${objetoVogais["Qnt de vogais"]}`
   } else return "Insira uma palavra válida"; 
};


console.log(contarVogais("paralelepipedo"))
*/

const funcaoEliminaCópias = (arr) => {
   let listaFinal = [];
   arr.forEach((numero) =>{
      const autorizacao = listaFinal.some((item) => item === numero)
      if(!autorizacao) {
         listaFinal.push(numero)
      }
   })
   return listaFinal
}
const arrayTeste = [1, 2, 2, 3, 4, 4, 5];
const teste = funcaoEliminaCópias(arrayTeste)
console.log(teste)

// treinando callback

