// Завдання: Напишіть програму для керування списком задач з можливістю додавання, видалення та відмічання 
// їх виконанням. Використовуйте делегування подій для зменшення кількості обробників подій та спрощення коду.

// Створення списку задач та їх відображення на сторінці:
// 1. Створити форму для додавання нової задачі з полем введення та кнопкою "Додати".
// 2. Створити список, в який будуть додаватися всі нові задачі. Кожна задача має містити чекбокс для відмітки виконання та кнопку для видалення.
// 3. При додаванні нової задачі до списку, вона має додаватися у вигляді нового елементу списку.
// 4. Всі задачі мають зберігатися у масиві для зручного керування.
// Відмічання виконання задач:
// 1. Для кожної задачі у списку є чекбокс, при кліку на який задача повинна відмічатися як виконана.
// 2. Виконані задачі мають змінювати свій стиль (наприклад, забарвлювання) для позначення їх статусу.
// Видалення задач:
// 1. Для кожної задачі у списку є кнопка "Видалити", при кліку на яку задача має видалятися зі списку та з масиву.
// Делегування подій:
// 1. Використовуйте делегування подій для зменшення кількості обробників подій та спрощення коду.
// 2. Всі обробники подій мають бути підвішені на батьківський елемент списку.
// 3. При додаванні нової задачі до списку, обробник події має бути доданий до новоствореного елементу списку.
// 4. При відмічанні виконання або видаленні задачі, обробник події має бути доданий до відповідного елементу у списку.

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const todoButton = document.querySelector('#todo-button');
const todoDeletButton = document.querySelector('.todo-delet')
const todos = [];

todoButton.addEventListener("click", addTodo)

function addTodo() {

  const newTodo = todoInput.value;

  todos.push(newTodo);

  const todosInHtml = todos.map((todo) => {
    return `<li id="new-todo">
               <h2 class="name-todo">${todo}</h2>
              <input type="checkbox" class="togle-todo">
              <button class="todo-delet" type="button">Delet</button>
            </li>`;
  }).join("");

  todoList.innerHTML = todosInHtml;

  todoInput.value = "";
};

todoList.addEventListener("click", deleteTodo)

function deleteTodo(event) {
  const element = event.target;

  if (element.classList.contains('todo-delet')) {
    element.parentElement.remove();
  }
}

todoList.addEventListener("change", toggleDone)

function toggleDone(event) {
  const element = event.target;

  if(element.parentElement.classList.contains("cheked")){
    element.parentElement.classList.remove("cheked");
  } else {
    element.parentElement.classList.add("cheked");
  }
}