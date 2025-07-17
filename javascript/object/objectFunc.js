/*
    Podemos atribuir funcoes aos objetos

*/

let Militar ={
    nome: "Galvão",
    graduacao: "2 Tenente",
    atirar: () => {
        return "Pow!"
    } 

}



console.log(Militar.atirar())


let Paramedico ={
    nome: "Jane",
    graduacao : "Paramedica de elite",
    curar: ()=>{ return "Curar"}
}