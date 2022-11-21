let todoInput
let errorInfo
let addBtn
let ulList
let newTodos

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
	ulList.addEventListener('click', checkTools)
	popupCloseBtn.addEventListener('click', closeEditBtn)
	popupAddBtn.addEventListener('click', acceptEditBtn)
	todoInput.addEventListener('keyup', enterKeyCheck)
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

const checkTools = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTool(e)
	} else if (e.target.matches('.delete')) {
		e.target.closest('li').remove()
		if (ulList.querySelectorAll('li').length === 0) {
			errorInfo.textContent = 'Brak zadań na liście.'
		}
	}
}

const editTool = e => {
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const closeEditBtn = () => {
	popup.style.display = 'none'
}

const acceptEditBtn = e => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść!'
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addNewTask()
	}
}

document.addEventListener('DOMContentLoaded', main)
