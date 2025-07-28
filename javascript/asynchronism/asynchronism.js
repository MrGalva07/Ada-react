const fs = require('fs')


// Ler um arquivo leva um tempo.Por isso essa readFile é uma func assincrona
// * 1.Callbacks

console.log("Antes")
fs.readFile('./asynchronism/txt.txt', (error , conteudoDoArquivo)=>{
    if(error){
        console.log("Deu merda")
    }else{
        console.log(String(conteudoDoArquivo))
    }
})
console.log("Depois")