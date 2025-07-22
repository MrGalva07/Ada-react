
/*
            FILTER retorna um array cujos elementos obedeçam determinada condição
*/


const carrinho = [
      {produto:"feijao" , valor:7.99 , quantidade:2},
      {produto:"arroz" , valor:2.99 , quantidade:4},
      {produto:"leite", valor:4.99 , quantidade:1},
]


const novoCarrinho = carrinho.filter((e)=> e.valor < 5 )
console.log(novoCarrinho)



const carrinho2 = [
      {produto:"feijao" , valor:7.99 , quantidade:2},
      {produto:"arroz" , valor:2.99 , quantidade:4},
      {produto:"leite", valor:4.99 , quantidade:1},
]


const novoCarrinho2 = carrinho.filter((e)=>{return e.valor < 5 })
console.log(novoCarrinho2)