

const cep = 53370440


async function fetchCEP() {
    try {
        const cepInserido = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dadosConvertidos = await cepInserido.json()
        console.log(dadosConvertidos)
    } catch (error) {
        console.log("Deu errado")
    }finally{
        console.log("Sou executado independente de sucesso ou fracasso")
    }

}


fetchCEP()

