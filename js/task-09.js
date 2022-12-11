function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color")
const color = document.querySelector(".color")
button.addEventListener("click", onButtonClick)

function onButtonClick() {
  let changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
}



// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.