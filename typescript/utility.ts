//Utility Types
// A ideia dos utility types é criar novos tipos a partir de tipos já existente
//Podendo assim
//clonar tornando obrigatorios os atributos do tipo,clonar tornando opcionais os atributos,clonar pegando apenas alguns dos
//atributos.clonar tornando

type Person ={
    name:string,
    idade:number,

};

// .1 Partial
//Podemos utiliza-lo para tornar opcionais(parciais) os atributos outrora obrigatórios de determinados types ou interfaces
//Inclui a criação de um novo type


type PersonPartial = Partial<Person>

const personPartial:PersonPartial[] = []


// .2 Required
// Podemos utiliza-lo para tornar obrigatórios os parametros existentes em determinado tipo

type PersonRequired = Required<Person>

const personRequired:PersonRequired[] = []


// .3 PICK
// Podemos utiliza-lo para pegar determinados atributos de dentro de um tipo já existente

type PersonPicked = Pick<Person , "name">

// 4. Omit

type PersonOmited = Omit<Person, "name">

const newPersonOmited:PersonOmited[] = [] 