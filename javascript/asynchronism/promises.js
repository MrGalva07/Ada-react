/*
            PROMISE
                    pending || resolved ||rejected


            .then()
             .catch()
              .finally()








*/



const fs = require('fs')


console.log("Antes da criação da promise")

/*Aqui o que eu fiz foi definir a promessa.
  Promessas nada mais são que objetos que prometem 
  que executarão dterminada função assíncrona.
*/


const promise = new Promise((resolve, reject) => {
    //Estou definindo uma leitura de um determinado arquivo(Esse tipo de tarefa normalmente é assincrona)
    //Isso acontece por que as vezes a leitura de um arquivo vai levar muito tempo
    //Sabendo que não devemos manter o fluxo de execução comprometido por conta disso criamos as funções assíncronas
    //As promesas são uma maneira de encapsular o retorno das funções assíncronas permitindo encadea-las com then ou catch por exemplo
    // esse encadeamento normalmente é utilizado quando queremos garantir que a execução em tempo determinado por nós ( ex:Uma func após a outra)
    fs.readFile('./asynchronism/txt.txt', (error, conteudoDoArquivo) => {
        //o readFile é uma func assinc que aceita o arquivo e a função.Dentro da função devemos passar os parametros de error e conteudo 
        // para assim poder lidar com os possíveis retornos
        if (error) {
            //O reject é um dos 3 possíveis estados de uma promessa.Seria o estado de falha
            //Rejeitado. Significa que a função assinc retornou um erro,Por conta disso a promessa retorna o estado de rejetiado
            reject(console.log("Deu merda"))
        } else {
            //O resolve é um dos 3 possíveis estados da promessa assim como o reject e pending(pendente)
            //Resolvido. Significa que a func conseguiu executar co sucesso a func assinc em questão
            resolve(console.log(String(conteudoDoArquivo)))
        }
    })
})
//Após a criação de uma promessa,Nós ganhamos o poder de encadear o retorno da função com o then por exmplo
promise.then((retornoDaPromise) => {
    //Após a execução da promessa ENTÃO(then) me mostre o conteúdo retornado
    console.log(retornoDaPromise)
}).catch((error) => {
    console.log(error)
}).finally(()=>{console.log("Executado independente do sucesso ou fracasso da promise")})


async function leitura(){
    console.log("Antes")

    await promise() // Espera a promessa ser resolvida pra continuar - Ou seja ,garante a ordem de execução sequencial

    console.log("Depois da leitura")
}


leitura()