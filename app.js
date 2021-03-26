// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")


// EventListener
todoButton.addEventListener("click", addTodo);

// Function
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    // crate todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = "hey!";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completeedButton = document.createElement('button');
    completeedButton.innerHTML = ' <i class = "bi bi-check" > </i>';
    completeedButton.classList.add('complete-btn');
    todoDiv.appendChild(completeedButton)

    // Check mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = ' <i class = "bi bi-trash" > </i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton)

    // Append to list
    todoList.appendChild(todoDiv);

}