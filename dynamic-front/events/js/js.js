const pButton = document.querySelector('#plus-button')
const mButton = document.querySelector('#minus-button')
const counter = document.querySelector('#counter').textContent
console.log(counter)

let result = Number(counter)

pButton.addEventListener('click', () => {
    while (result >= 0) {
        result += 1
        console.log(result)
        break
    }

})
console.log(result)
mButton.addEventListener('click', () => {
    while (result > 0) {
        result -= 1
        console.log(result)
        break

    }
})




/////// CHANGE THEME


let darkTheme = false

const themeButton = document.getElementById("theme")

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme


    const body = document.querySelector('body')
    if (darkTheme) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }


})
