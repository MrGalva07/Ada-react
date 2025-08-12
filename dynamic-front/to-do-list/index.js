const form = document.querySelector('#to-do-form')
//Estou capturando o formulário
const taskTitleInput = document.querySelector('#task-title-input')
//Estou capturando o elemento do inout no formulário
const toDoList = document.querySelector('#to-do-list-ul')
//Estou capturando o elemento ul 

let tasks = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    //Estou previnindo o efeito de recarregamento decorrente dp envio do formulário

    const taskTitle = taskTitleInput.value
    //Estou capturando o valor de dento do input quando o evento de 'submit for acionado

    if (taskTitle.lenght < 3) {
        alert('Sua tarefa precisa de pelo menos 3 caracteres')
        return
    }

    tasks.push({
        title: taskTitle,
        done: false
    }
    )

    console.log(tasks)
    const li = document.createElement('li')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')

    const span = document.createElement('span')
    span.textContent = taskTitle
    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (event) => {
        console.log(event.target.parentElement)
        toDoList.removeChild(event.target.parentElement)
        
    })

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    toDoList


    toDoList.appendChild(li)

    taskTitleInput('')
}
)