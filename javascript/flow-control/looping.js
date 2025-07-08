
/*Looping w while*/


const prompt = require('readline-sync')
/*

let saldo = 0

let deposito = Number(prompt.question('Insira o valor para deposito ')) ;

while(deposito <= 0 ){
    deposito = Number(prompt.question("Informe um valor válido para deposito")); 
}

saldo += deposito 

console.log("Você depositou R$: " + deposito )
console.log("Seu saldo atual é de R$: "+ saldo)
*/


let nota = Number(prompt.question("Insira a nota :"))

let c = 0

let somaDasNotas = 0;

let media = 0

while(nota >= 0){
    somaDasNotas += nota
    c++
    console.log("Atualmente a somaDasNotas é :"+ somaDasNotas)
    nota = Number(prompt.question("Insira a próxima nota :"))
   if(nota< 0){
    console.log("Certo,estou encerrando a execucao")
    break
   }
  
}

media = somaDasNotas / c

console.log('Media :' + media)




