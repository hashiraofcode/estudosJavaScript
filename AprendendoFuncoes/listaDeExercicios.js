// 1. Escreva uma função chamada soma que recebe dois números e retorna a soma deles.
const exercicio1 = (num1, num2) => console.log(num1 + num2);
//------------------------------------------------------------

// 2. Crie uma função chamada ehPar que recebe um número e retorna true se o número for par e false caso contrário.
const exercicio2 = (number) => {
    const ehPar = (number) => {
        if (number % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    const resultado = ehPar(number)
    console.log(resultado)
}
//---------------------------------------------------------------
// 3. Escreva uma função chamada fatorial que calcula o fatorial de um número.

const exercicio3 = (number) => {
    const fatorial = (l) => {
        if (l > 0 && l <= 170) {
            let resultado = l;
            for (let i = l; i > 0; i--) {
                if (i < l) {
                    resultado = resultado * i
                }
            }
            console.log(`O resultado da fatoração é : ${resultado}`)
        } else {
            console.log("Por favor insira um número válido")
        }
    }
    fatorial(number)
}
//--------------------------------------------------------------------
// 4. Crie uma função chamada saudacao que receba um nome como argumento e retorne uma saudação com esse nome.
const exercicio4 = (nome) => {
    const ValNome = nome
    const saudacao = (name) => {
        console.log(`Olá ${name}!!!`)
    }
    saudacao(ValNome)
}
//---------------------------------------------------------------------
// 5. Escreva uma função chamada maiorNumero que recebe um array de números e retorna o maior número do array.
const exercicio5 = (arrayNumeros) => {
    const Array = arrayNumeros;
    const maiorNumero = (array) => {
        let getNumber = 0;
        for (let arrayItem of array) {
            if (arrayItem > getNumber) {
                getNumber = arrayItem
            }
        }
        console.log(getNumber)
    }
    maiorNumero(Array)
}
const arrayExemplo = [299,2,4,5,6,7,8,9,10]
//---------------------------------------------------------------------
// 6. Crie uma função chamada quadrado que recebe um número e retorna o quadrado desse número.
const exercicio6 = (number) => {
    const quadrado = (numero) => numero*numero;
    return quadrado(number)
}
//----------------------------------------------------------------------
// 7. Escreva uma função chamada palindromo que verifica se uma string é um palíndromo (lê-se da mesma forma de trás para frente).
 const exercicio7 = (palavra) => {
    const word = palavra;
    const palindromo = (str) => {
        if (str === str.split('').reverse().join('')) {
            console.log(`A palavra "${str}" é um palíndromo`)
        } else {
            console.log(`A palavra "${str}" não é um palíndromo`)
        }
    }
    const eUmaString = typeof word
    if (eUmaString === "string" && word != "" && eUmaString != "undefined") {
        palindromo(word)
    } else {
        console.log("Escreva uma palavra no formato \"Exemplo\"")
    }
    
 }
// 8. Crie uma função chamada contarVogais que recebe uma string e retorna o número de vogais nessa string.
 const exercicio8 = (word) => {
    const contarVogais = (string) => {
        const criandoArray = string.split('')
        let contadorDeVogais = 0;
        for (let getLetra of criandoArray) {
            if (getLetra === "a" || getLetra === "e" || getLetra === "i" || getLetra === "o" || getLetra === "u") {
                contadorDeVogais++
            }
        }
        console.log(`A palavra ${string} possui: ${contadorDeVogais} vogais`)
    }
    if (typeof word === "string" && word != "" && word != "undefined"){
        contarVogais(word)
    } else {
        console.log("Escreva uma palavra no formato \"Exemplo\"")
    }
    
 }
 exercicio8("paralelepipedo")

