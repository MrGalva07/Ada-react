



const nome = "Luckgamer"
const elements = ["Coco" , 1 , 2 , nome]


for(c = 0; c < elements.length ;c++){
    console.log(elements[c])
}


/*
Main methods


lenght - considera o tamanho do array

push - Adiciona o elemento SEMPRE ao final do array ---- não aceita declarar a posição na qual o elemento será inserido
unshift - introduz o elemento ao início do array

pop - destroi o último elemento do array
shift - remove o primeiro elemento

includes -  verifica existencia de determinado elemento no array
includes retorna sempre um "true " ou " false" resultade da resposta para a pergunta : "Determinado elemento existe no array?"

indexOf - Indica o indice do elemento no array
*/


const fruits = [ "Banana" , "Maca " , "Pera"]

for (counter = 0 ; counter < fruits.length ; counter++){
    console.log(fruits[counter])
}


fruits.push('ABACATE ')

for (secondCounter = 0 ; secondCounter < fruits.length ; secondCounter++){
    console.log(fruits[secondCounter])
}
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)

console.log(fruits.includes("Macarrao"))

let includes = fruits.includes("Pera")

if (includes){
    console.log("elemento existe no array!")
}else{
    console.log(includes + "Não existe no array")
}


console.log(fruits.indexOf("Pera"))

