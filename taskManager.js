function createTaskManager() {
  // Private state: cannot be accessed directly outside this function.
  let tasks = [];

  return {
    addTask(task, priority = "normal") {
      if (typeof task !== "string" || task.trim() === "") {
        throw new Error("Task name cannot be empty.");
      }

      const newTask = {
        id: Date.now() + Math.random(),
        task: task.trim(),
        priority,
      };

      tasks.push(newTask);

      return { ...newTask };
    },

    addTasks(...items) {
      return items.map((item) => this.addTask(item));
    },

    listTasks() {
      // Return copies so external code cannot modify private task objects.
      return tasks.map((task) => ({ ...task }));
    },

    removeTask(index) {
      if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
        return false;
      }

      tasks.splice(index, 1);
      return true;
    },

    saveTasks(callback) {
      if (typeof callback !== "function") {
        throw new TypeError("A callback function is required.");
      }

      setTimeout(() => {
        callback(tasks.map((task) => ({ ...task })));
      }, 1000);
    },
  };
}

// Export the function for use in other JavaScript files.
if (typeof module !== "undefined" && module.exports) {
  module.exports = createTaskManager;
}