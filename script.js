document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask () {
        const taskText = taskInput.value.trim();

        if(taskText === "") {
            alert("Please Enter a task");
            return; 
        } 
        const task = document.createElement("li");
            task.textContent = taskText;
            const remButton = createElement('button');
            remButton.textContent = "Remove";
            remButton.classList.add = "remove-btn";
            remButton.onclick = function() {
                task.remove();
            };
            task.appendChild(remButton);
            document.taskList.appendChild(task);
            taskInput.value = "";

    };

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    });

});