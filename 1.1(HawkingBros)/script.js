const block = document.querySelector('.block')
const input = document.querySelector('input')
const selectButton = document.querySelector('.select')
const clearButton = document.querySelector('.clear')

const LOCAL_NAME = 'backgroundColor'

const clearBlock = () => {
  block.style.backgroundColor = 'black'
  input.value = ''
}

const setStorageColor = () => {
  if (localStorage.getItem(LOCAL_NAME)) {
    block.style.backgroundColor = localStorage.getItem(LOCAL_NAME)
  } else clearBlock()
}

window.onload = () => {
  setStorageColor()
}

selectButton.addEventListener('click', () => {
  localStorage.setItem(LOCAL_NAME, input.value)
  setStorageColor()
})

clearButton.addEventListener('click', () => {
  localStorage.removeItem(LOCAL_NAME)
  clearBlock()
})