const countEl = document.querySelector('input[type="number"]')
const btncreate = document.querySelector('button[data-create]')
const btndestroy = document.querySelector('button[data-destroy]')
const boxForDiv= document.querySelector('#boxes')
let numberDef = 0
let arrDiv = []

function createEl(w, h){
  const createDiv = document.createElement('div')
  createDiv.classList.add('item')
  createDiv.style.width = `${w}px`
  createDiv.style.height = `${h}px`
  createDiv.style.backgroundColor = getRandomHexColor()
  createDiv.style.marginBottom = '10px'

  arrDiv.push(createDiv)
}

function createEls(evt){
  let w = 30
  let h = 30
  for (let i=0; i<countEl.value; i+=1) {
    createEl(w, h);
    w +=10;
    h+=10;
  }
    boxForDiv.append(...arrDiv)
    arrDiv = []
}

btncreate.addEventListener('click', createEls)
btndestroy.addEventListener('click', destroyBoxes)

function destroyBoxes(){  
  boxForDiv.innerHTML='';
  countEl.value = ''
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
