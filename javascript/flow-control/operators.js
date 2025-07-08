
/*
-------- IGUALDADE
         
    == Verifica apenas valor ( "10" == 10  )     Número igual a texto pois só verifica o conteúdo
    === Verifica valor e tipo  ( "10" !== 10 )   Mais seguro e indicado para verificar igualdade pois Verifica o tipo
*/


let number1 = 10
let number2 = "10" 

console.log(number1 == number2)

console.log(number1 === number2) /// Verifica com segurança

console.log(number1 != number2 )

console.log(number1 !== number2)

/*
----- LOGICAL CONJUNCTION

    Forma de juntar duas operações lógicas
    &&(e) ||(ou)
   
*/


/* Ternary operator
     
    const >= 18 ? () : ()
    verificação ? true : false
    
    if {} else {}


    Funciona muito bem quando quero retornar valores específicos
    Utilizamos muito no react conditional-render
*/

const prompt = require('readline-sync')
 let age = Number(prompt.question("Qual a sua idade?"))

const mensagem = age >= 18 ? "Maior de idade" : "Menor de idade"

console.log(mensagem)
