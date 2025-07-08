const prompt = require('readline-sync')

const idade = Number(prompt.question("Qual a sua idade?"))

const maiorDeIdade = idade >= 18;


if(maiorDeIdade){
    console.log("Você é de maior")
} else if(!maiorDeIdade && idade === 17 || 16 ){
    console.log("Você é de menor mas tá quase lá")
}else{
    console.log("Você é de menor")
}

