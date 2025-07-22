/*
            MAP retorna um novo array(uma cópia do original)

*/
const numbers = [10,20,50,30,90]


const novoArray = numbers.map((e)=>(e))


console.log(novoArray)


const novoArrayDobrado = numbers.map((e)=>(e * 2))


console.log(novoArrayDobrado)
console.clear()


const carrinho = [
      {produto:"feijao" , valor:7.99 , quantidade:2},
      {produto:"arroz" , valor:2.99 , quantidade:4},
      {produto:"leite", valor:4.99 , quantidade:1},
]


const novoCarrinho = carrinho.map((e)=>{
    return{
        ...e,
        vTotal:e.valor * e.quantidade
    }
})
console.log(novoCarrinho)