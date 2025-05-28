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
