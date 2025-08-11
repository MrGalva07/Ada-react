//Local Storage x Session storage


//Local storage persiste os dados,Ou seja,quando reiniciar a sessão,não perderei os dados
//Session storage salva apenas para aquela sessão.Portanto,caso eu feche o navegador,ao abrir não terei mais aqueles dados salvos

//a chave e valor podem ser
// "nome" , "Lucas"     <-- Nesse caso,Estou passando o valor como string pois se trata de uma string

//ambos me dão 3 métodos importantes
//setItem('key','value')
//getItem('key')
//clear()


const themeButton = document.querySelector('#theme')
let darkTheme;

window.onload=()=>{
    const isDarkThemeStorage = localStorage.getItem("isDarkTheme")

    //getitem sempre passa o valor como string,Por conta disso estou fazendo essa conversão
    darkTheme = isDarkThemeStorage === "true" ? true : false 

        const body = document.querySelector('body')
    if (darkTheme) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
}


themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme

    localStorage.setItem('isDarkTheme', darkTheme)
    // "theme" , darkTheme     <-- Nesse caso,Estou passando o valor da variável,por isso as áspas só se mantem na chave

   //Dessa forma garanto que a preferencia do usuário pelo darktheme ou não seja respeitada mesmo após um reinício de sessão 



})
