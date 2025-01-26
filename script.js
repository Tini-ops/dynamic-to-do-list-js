document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = []; 

    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks); 
            tasks.forEach(taskText => createTaskElement(taskText)); 
        }
    }

    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = () => {
            taskList.removeChild(listItem); 
            tasks = tasks.filter(task => task !== taskText); 
            saveTasksToLocalStorage();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    function addTask() {
        const taskText = taskInput.value.trim(); 

        if (taskText === "") {
            alert("Please enter a task!"); 
            return;
        }

        if (tasks.includes(taskText)) {
            alert("This task already exists!");
            return;
        }

        tasks.push(taskText); 
        saveTasksToLocalStorage();
        createTaskElement(taskText);
        taskInput.value = ''; 
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();ld
        }
    });

    loadTasksFromLocalStorage();
});