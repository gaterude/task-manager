# Task Manager

A simple JavaScript Task Manager application built using closures, rest parameters, default parameters, callbacks, and DOM manipulation.

## Features

- Add individual tasks.
- Add multiple tasks using rest parameters.
- Assign task priorities: low, normal, or high.
- List all tasks.
- Remove tasks.
- Save tasks asynchronously using callbacks.
- Browser interface built with HTML and JavaScript.
- Private task storage using closures.

## Project Structure

```text
task-manager/
│
├── taskManager.js   # Core task management logic
├── test.js          # Tests the task manager functionality
├── index.html       # Browser interface
├── app.js           # DOM interactions and event listeners
└── README.md        # Project documentation
```

## JavaScript Concepts Used

### 1. Closures

The `createTaskManager()` function contains a private variable:


let tasks = [];


The returned methods can access and modify this variable because they are created inside the same function scope.

This is an example of a closure.

External code cannot directly access `tasks`, which protects the internal application state.

### 2. Rest Parameters

The `addTasks()` method uses the rest parameter syntax:


addTasks(...items)


The rest parameter allows the method to accept multiple arguments and collect them into an array.

Example:

manager.addTasks("Read notes", "Practise Git", "Review callbacks");


### 3. Default Parameters

The `addTask()` method uses a default parameter:

addTask(task, priority = "normal")


If a priority is not provided, JavaScript automatically assigns `"normal"`.

Example:


manager.addTask("Complete assignment");
manager.addTask("Revise JavaScript", "high");


### 4. Asynchronous Callbacks and the Event Loop

The `saveTasks()` method uses `setTimeout()` to simulate an asynchronous saving operation.

```javascript
saveTasks(callback) {
  setTimeout(() => {
    callback(tasks.map((task) => ({ ...task })));
  }, 1000);
}
```

The operation waits for approximately one second before executing the callback.

The event loop allows JavaScript to continue executing other synchronous code while waiting.

When the timer finishes, its callback becomes eligible to run. It executes when the call stack is clear.

This demonstrates asynchronous JavaScript execution.

## Running the Application

### Requirements

- Node.js
- A modern web browser
- Visual Studio Code (optional)

### Test the Core Functionality

Open the project directory in PowerShell and run:

```powershell
node test.js
```

This tests:

- Adding individual tasks.
- Adding multiple tasks.
- Removing tasks.
- Private state.
- Asynchronous saving.

### Run the Browser Interface

Open `index.html` in a browser.

Alternatively, use the Live Server extension in Visual Studio Code.

The browser interface allows users to add, view, remove, and asynchronously save tasks.

**Note:** This project currently stores tasks in memory. Tasks are not permanently saved after the application is closed or refreshed.

## Git Branching and Merging

The project uses feature branches to organize development.

### Main Branch

The `main` branch contains the integrated application.

### Feature Branches

- `feature/core-task-manager` — Implements the core task management logic.
- `feature/browser-interface` — Adds the browser interface and DOM functionality.

### Git Commands Used

Create a feature branch:

```bash
git switch -c feature/browser-interface
```

Stage selected files:

```bash
git add taskManager.js app.js index.html
```

Commit changes:

```bash
git commit -m "feat: add browser task manager interface"
```

Push the feature branch:

```bash
git push -u origin feature/browser-interface
```

Switch to main:

```bash
git switch main
```

Merge the feature branch:

```bash
git merge --no-ff feature/browser-interface -m "merge: integrate browser task manager interface"
```

Push the updated main branch:

```bash
git push origin main
```

The `--no-ff` option creates a merge commit, preserving the feature branch history.

## Author

Mctaba Labs JavaScript Coursework Project.