



const q = require('readline-sync')

let poke = q.question('Insira o nome do pokemon que você deseja pesquisar: ')

async function pesquisarPokemon(poke){

    try {
    const pokemonPesquisado = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke} `)
    const pokemonConvert = await pokemonPesquisado.json()
    console.log(pokemonConvert)
    } catch (error) {
        console.log("Erro ao encontrar pokemon")
        console.log(error)
    }finally{
        console.log("Resultados da sua pesquisa")
    }
}

pesquisarPokemon(poke)