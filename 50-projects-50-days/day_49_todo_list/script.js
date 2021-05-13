const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUl = document.getElementById('todos')

let todos = JSON.parse(localStorage.getItem('todos'))

const addTodo = todo => {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoElement = document.createElement('li')
    if (todo && todo.completed) {
      todoElement.classList.add('completed')
    }

    todoElement.innerText = todoText

    todoElement.addEventListener('click', () => {
      todoElement.classList.toggle('completed')
      updateLocalStorage()
    })
    todoElement.addEventListener('contextmenu', event => {
      event.preventDefault()
      todoElement.remove()
      updateLocalStorage()
    })

    todoUl.appendChild(todoElement)

    // Clear input:
    input.value = ''

    updateLocalStorage()
  }
}

const updateLocalStorage = () => {
  todoElements = document.querySelectorAll('li')

  const todos = []

  todoElements.forEach(element => {
    todos.push({
      text: element.innerText,
      completed: element.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

if (todos)
  todos.forEach(todo => addTodo(todo))

form.addEventListener('submit', event => {
  event.preventDefault()

  addTodo()
})
