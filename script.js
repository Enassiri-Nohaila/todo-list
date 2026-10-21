const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez saisir une tâche !");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = taskText;
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("delete-btn");

    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});