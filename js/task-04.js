const counter = {
    counterValue :0,
    increment (){
        this.counterValue +=1;
    },
    decrement (){
        this.counterValue -=1
    },
}
const button = document.querySelectorAll('button');
const valueItem = document.querySelector('#value')

button[0].addEventListener('click', ()=>{
counter.decrement()
valueItem.textContent = counter.counterValue
}
)
button[1].addEventListener('click', ()=>{
    counter.increment()
    valueItem.textContent = counter.counterValue
    }
    )
