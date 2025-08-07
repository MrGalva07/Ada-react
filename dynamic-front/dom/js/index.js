//1 - tagName
const allP = document.getElementsByTagName('p')
console.log(allP)


//2 - class

const parag = document.getElementsByClassName('parag')
console.log(parag)

//3 - name

const emailInput = document.getElementsByName('email')
console.log(emailInput)

//4 -id

const imgId = document.getElementById('js-logo')
console.log(imgId)

//5 - querySellector

const imgClass = document.querySelector('.img-logo')
console.log(imgClass)

console.clear()

const primeiroParagrafo = document.querySelector('.parag')
console.log(primeiroParagrafo)

console.log(primeiroParagrafo.textContent)

primeiroParagrafo.textContent = "Outra coisa"
//Mudo o conteudo do texto
 console.log(primeiroParagrafo)

 const h1 = document.querySelector('#fh1') 

 //atribuindo um novo elemento html
 h1.innerHTML = "<strong>Mudei</strong>"


 // Inputs 
 const inputValue = document.getElementById('email-input')
 inputValue.value = "luck"

 //6 - Create Element
 const novaTagLi = document.createElement('li')
 console.log(novaTagLi)

 novaTagLi.textContent = "Li adicionado"

const lista = document.querySelector('#lista')
// 7 - appendchild
lista.appendChild(novaTagLi)

console.log(novaTagLi.textContent)
//8 - removeChild
lista.removeChild(novaTagLi)
console.log(document.URL)