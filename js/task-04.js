// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEL = document.querySelector("#value")



btnDecrement.addEventListener("click", onDecrementClick);

function onDecrementClick() {
  counterValue -= 1;
  valueEL.textContent = counterValue;
}

btnIncrement.addEventListener("click", onIncrementClick);

function onIncrementClick() {
  counterValue += 1;
  valueEL.textContent = counterValue;
}


