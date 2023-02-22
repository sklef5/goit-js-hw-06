const rank= document.querySelector('#font-size-control')
const textSize = (document.querySelector("#text"))


rank.addEventListener('input', (event)=>{
textSize.style.fontSize = `${event.currentTarget.value}px`
})
