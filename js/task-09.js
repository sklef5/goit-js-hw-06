const btn = document.querySelector('.change-color')
const bodyBg = document.querySelector('body')
const spanColor = document.querySelector('.color')

btn.addEventListener('click', changeColor)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(evt){
  let color = getRandomHexColor()
  bodyBg.style.backgroundColor = color,
  spanColor.textContent = color
}