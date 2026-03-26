import { saveTasks } from './storage.js';

export function renderTasks(tasks) {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${task.text}
            <button onclick="deleteTask(${index})">❌</button>
        `;

        list.appendChild(li);
    });
}
