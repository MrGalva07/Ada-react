/*
            reduce deve inicializar o acumulador 

                array.reduce((acc ,e)=>{ return acc + e , 0})

            Serve para reduzir array de objetos a um número

        

*/



const numbers = [ 1 , 2 ,3 ,4 ,5]

console.log(numbers.reduce((acc ,e)=>{return acc + e }))


const somaDosPares = numbers.reduce(
    (acc,e)=>{
        if (e % 2 === 0){
            return acc + e
        }else{
            return acc
        }
    },0
)

console.log(somaDosPares)


const carrinho2 = [
      {produto:"feijao" , valor:7.99 , quantidade:2},
      {produto:"arroz" , valor:2.99 , quantidade:4},
      {produto:"leite", valor:4.99 , quantidade:1},
]


const total = carrinho2.reduce((acc , e) => { return e.valor * e.quantidade + acc},0   )
