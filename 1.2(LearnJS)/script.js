const textarea = document.querySelector('textarea')
const button = document.querySelector('button')

const LOCAL_NAME = 'textAreaValue'

window.addEventListener('load', () => {
  textarea.value = localStorage.getItem(LOCAL_NAME)
})

textarea.addEventListener('input', () => {
  localStorage.setItem(LOCAL_NAME, textarea.value)
})

button.addEventListener('click', () => {
  localStorage.removeItem(LOCAL_NAME)
  textarea.value = ''
})