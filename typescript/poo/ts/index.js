"use strict";
//POO - Classes
class Pessoa {
    //Ao definir parametros no constructor,Estou garantindo que sempre que um novo objeto da classe pessoa for instanciado,O usuário deve passar 
    //correspondentes aos parametros definidos
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    //métodos
    dormir() {
        console.log("Dormindo ");
    }
    //get é um accesor.É por meio dele que eu consigo retornar um valor privado
    //Como get retorna um valor,preciso explicitar o tipo de retorno
    get cpf() {
        return this._cpf;
    }
    //Set não retorna nada.Apenas é uma função chamada pra lidar com um novo valor "newCpf" sendo atribído na passagem de parametro
    //Por isso,ao contrario do get,Não defino nada depois  de set "cpf(newCpf:string)"
    //Set apenas dá a capacidade de atribuir o valor passado como parametro quando for chamado
    //Agora,mesmo sendo privado ,é possível acessar indiretamente o valor retornado por esse atributo
    set cpf(newCpf) {
        this._cpf = newCpf;
    }
}
const pessoa1 = new Pessoa("Galrruramaxu", 13, 2.0, "120.456.708-10");
console.log(pessoa1.cpf);
//HERANÇA
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, code) {
        super(nome, idade, altura, cpf);
        this.code = code;
    }
    ensinar() {
        console.log("Ensinando");
    }
}
const professor1 = new Professor('Danilo', 22, 1.92, "702.090.666.20", "200-2");
professor1.dormir();
//Agora posso usar o set da classe pai para alterar um valor atribuído
professor1.cpf = "703.090.666.20";
