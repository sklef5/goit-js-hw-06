const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event){
    event.preventDefault();

    const formEl = event.currentTarget.elements

    const email = formEl.email.value
    const password = formEl.password.value
    if (email ==='' || password===''){
       return alert("Всі поля повинні бути заповнені!");
    }
    form.reset()
    console.log(` Login  - ${email},\n password  - ${password}`)
}