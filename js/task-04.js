const counter = {
    counterValue :0,
    increment (){
        this.counterValue +=1;
    },
    decrement (){
        this.counterValue -=1
    },
}
const btnDec = document.querySelector('button[data-action="decrement"]');
const  btnEnc = document.querySelector('button[data-action="increment"]');
console.dir(btnEnc)
const valueItem = document.querySelector('#value')

btnDec.addEventListener('click', ()=>{
counter.decrement()
valueItem.textContent = counter.counterValue
}
)
btnEnc.addEventListener('click', ()=>{
    counter.increment()
    valueItem.textContent = counter.counterValue
    }
    )
