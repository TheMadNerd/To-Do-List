let todoInput
let errorInfo
let addBtn
let ulList
let newTodos

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodos = document.createElement('li')
		newTodos.textContent = todoInput.value

		createToolsArea()
		ulList.append(newTodos)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const newTools = document.createElement('div')
	newTools.classList.add('tools')
	newTodos.append(newTools)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	newTools.append(completeBtn, editBtn, deleteBtn)
}

document.addEventListener('DOMContentLoaded', main)
