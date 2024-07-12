const body = document.querySelector("body")
const header = document.querySelector("h1")
const button = document.querySelector("button")
const text = document.querySelector("h2")

const arr = ["blue", "red", "yellow", "green", "purple", "orange"]

button.addEventListener('click', () => {
  const color = arr[Math.floor(Math.random() * arr.length)]
  
  document.body.style.backgroundColor = color
  button.style.color = color
  text.textContent = `The current background color is ${color}`
  text.style.color = "whitesmoke"
})










