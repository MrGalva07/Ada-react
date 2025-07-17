/*

FOR - inicializa;verifica a cond ;EXECUTA O CÓDIGO ; incrementa

ele executa e SOMENTE DEPOIS INCREMENTA



for(c = 0 ; c <5 ; c++){
        console.log(c)
}

esse bloco exibe 0 , 1, 2 , 3 , 4

Exatamente por conta de a execução ser feita antes do incremento.
A execução só acontece enquanto a condição for verdadeira.Por isso que o 5 não é exibido
por isso ,quando c = 5 , a condição deixa de ser verdadeira e o código não é executado

expressão 1 : inicializa variavel de controle
expressão 2 : condição para permanencia
expressão 3 : incremento


*/



for (i=0; i<10 ;i++){
    console.log(i)
}

const nome = "Luck"


console.log(nome.length)


for(c =0 ; c < nome.length ; c++ ){
    console.log(nome[c])
}