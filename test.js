const createTaskManager = require("./taskManager");

const manager = createTaskManager();

console.log("ADDING INDIVIDUAL TASKS");

manager.addTask("Complete JavaScript assignment");
manager.addTask("Revise closures", "high");

console.log(manager.listTasks());

console.log("\nADDING MULTIPLE TASKS");

manager.addTasks("Read notes", "Practise Git", "Review callbacks");

console.log(manager.listTasks());

console.log("\nREMOVING A TASK");

console.log("Removed:", manager.removeTask(0));
console.log(manager.listTasks());

console.log("\nTESTING ASYNCHRONOUS SAVING");

console.log("Saving started...");

manager.saveTasks((savedTasks) => {
  console.log("Tasks saved successfully:");
  console.log(savedTasks);
});

console.log("This message appears before the save callback.");

console.log("\nTESTING PRIVATE STATE");

console.log("Can access internal tasks directly:", manager.tasks);

const copiedTasks = manager.listTasks();
copiedTasks.pop();

console.log("Internal task count:", manager.listTasks().length);