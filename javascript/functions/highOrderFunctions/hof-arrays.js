/*FOR EACH ----> percorre os elementos do array
  MAP -----> Cria um novo array
  FIND(Econtrar baseado em condição verdadeira) ----> Retorna elementos com base em condição específica 
  devolve o primeiro valor que respeita a condição 

*/


const array = [10 ,30 ,40 ,50]


array.forEach((e) => console.log(e))



const encontradoIgual = array.find((e) => {return e === 10}  )




console.log(encontradoIgual)

const encontradoMaiorQue = array.find((e) => {return e > 10}  )

console.log(encontradoMaiorQue)

const encontradoMaiorQueMenorQue = array.find((e) => {return e > 10 && e < 50}  )
console.log(encontradoMaiorQueMenorQue)



const pessoas = [



    {nome:"Julia" , idade:18},
     {nome:"Maria" , idade:10},
      {nome:"Janete" , idade:5},
]



const pessoaMaior = pessoas.find ((pessoa)=>{return pessoa.idade >= 18})
console.log(pessoaMaior)





