const inputField = document.querySelector('#name-input')
const outputField = document.querySelector('#name-output')

inputField.addEventListener('input', (event)=>{
    event.currentTarget.value !== '' ?
    outputField.textContent = event.currentTarget.value :
    outputField.textContent = "Anonymous"
    }
)
