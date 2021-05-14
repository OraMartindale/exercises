const screens = document.querySelectorAll('.screen')
const chooseInsectButtons = document.querySelectorAll('.choose-insect-btn')
const startButton = document.getElementById('start-btn')
const gameContainer = document.getElementById('game-container')
const timeElement = document.getElementById('time')
const scoreElement = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}

const startGame = () => {
  setInterval(increaseTime, 1000)
}

const increaseTime = () => {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeElement.innerHTML = `Time: ${m}:${s}`
  seconds++
}

const increaseScore = () => {
  score++
  if (score > 19) {
    message.classList.add('visible')
  }
  scoreElement.innerHTML = `Score: ${score}`
}

const createInsect = () => {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.left = `${x}px`  
  insect.style.top = `${y}px`
  insect.innerHTML = `
    <img
      src="${selectedInsect.src}"
      alt="${selectedInsect.alt}"
      style="transform: rotate(${Math.random() * 360}deg"
     />
  `
  insect.addEventListener('click', catchInsect)
  gameContainer.appendChild(insect)
}

function catchInsect() {
  increaseScore()
  this.classList.add('caught')
  setTimeout(() => this.remove(), 2000)
  addInsects()
}

const addInsects = () => {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

const getRandomLocation = () => {
  const x = Math.random() * (window.innerWidth - 200) + 100
  const y = Math.random() * (window.innerHeight - 200) + 100

  return { x, y }
}

startButton.addEventListener('click', () => screens[0].classList.add('up'))

chooseInsectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selectedInsect = { src, alt }
    screens[1].classList.add('up')
    setTimeout(createInsect, 1000)
    startGame()
  })
});