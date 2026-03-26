import { loadTasks, saveTasks } from './storage.js';
import { renderTasks } from './ui.js';

let tasks = loadTasks();

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push({ text: input.value, done: false });
    saveTasks(tasks);
    renderTasks(tasks);
    input.value = "";
}

renderTasks(tasks);
