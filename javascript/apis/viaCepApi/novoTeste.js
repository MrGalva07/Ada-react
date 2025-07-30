const q = require('readline-sync')

const prompt = q.question('Insira o CEP : ')

const cep = Number(prompt)

async function obterEndereco(cep) {

    try {
        const enderecoObtido = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        //Esta api retorna um objeto.Por isso,fazemos uma conversão para JSON afim de exibir completamente
        const enderecoConv = await enderecoObtido.json()
        console.log("Deu certo")
        console.log(enderecoConv)
    } catch (error) {
        console.log('Deu errado')
        console.log(error)
    }finally{
        console.log("execução independe do resultado")
    }


}

obterEndereco(cep)