const manager = createTaskManager();

// Get HTML elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");
const taskList = document.getElementById("task-list");
const saveButton = document.getElementById("save-button");
const message = document.getElementById("message");

// Display all tasks
function displayTasks() {
  taskList.innerHTML = "";

  const tasks = manager.listTasks();

  tasks.forEach((task) => {
    const listItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = `${task.task} - Priority: ${task.priority}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      const currentTasks = manager.listTasks();
      const taskIndex = currentTasks.findIndex(
        (item) => item.id === task.id
      );

      if (taskIndex !== -1) {
        manager.removeTask(taskIndex);
        displayTasks();
        message.textContent = "Task removed.";
      }
    });

    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
  });
}

// Add a task when the form is submitted
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = taskInput.value.trim();
  const priority = priorityInput.value;

  if (!taskName) {
    message.textContent = "Please enter a task.";
    return;
  }

  manager.addTask(taskName, priority);

  taskInput.value = "";
  priorityInput.value = "normal";

  displayTasks();

  message.textContent = "Task added successfully.";
});

// Save tasks using the asynchronous callback
saveButton.addEventListener("click", () => {
  message.textContent = "Saving tasks...";

  saveButton.disabled = true;

  manager.saveTasks((savedTasks) => {
    console.log("Saved tasks:", savedTasks);

    message.textContent = `Successfully saved ${savedTasks.length} task(s).`;

    saveButton.disabled = false;
  });
});

// Display existing tasks when the page loads
displayTasks();