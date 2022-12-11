// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector("#value");
console.log(counterValue)

btnDecrement.addEventListener("click", onDecrementClick);

function onDecrementClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

btnIncrement.addEventListener("click", onIncrementClick);

function onIncrementClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
