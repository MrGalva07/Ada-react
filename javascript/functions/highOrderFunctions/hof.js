
/*
 FUNCAO QUE RETORNA UMA FUNC COMO PARAMETRO

*/


const somar = (num1 , num2) => num1 + num2
const subtrair = (num1 , num2) => num1 - num2
const multiplicar = (num1 , num2) => num1 * num2
const dividir = (num1 , num2) => num1 / num2


const calcular = (num1,num2,operacao) => operacao(num1 , num2)



console.log(calcular(5 , 2 ,somar))