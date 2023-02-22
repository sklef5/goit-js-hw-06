const getEL = document.querySelector('#validation-input')
const numberEl = getEL.getAttribute('data-length')


getEL.addEventListener('blur', onBlurInput)

 function onBlurInput(){
    if (numberEl == getEL.value.length){
        getEL.classList.add('valid')
        getEL.classList.remove('invalid')
    }else{
        getEL.classList.add('invalid')
        getEL.classList.remove('valid')
    }
 }
