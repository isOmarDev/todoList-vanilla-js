import { Task } from "../classes/task.js";
import { tasks } from "../classes/tasks.js";
import { tasksDom } from "../classes/tasksDom.js";

(function () {
  "use strict";

  const addTaskForm = document.getElementById("add-task-form");
  const input = document.getElementById("add-task-input");

  addTaskForm.addEventListener("submit", addTask);

  function addTask(e) {
    const description = input.value;

    e.preventDefault();

    if (description !== "") {
      tasks.add(new Task(description));
      tasksDom.renderActiveTasksList();
      input.value = "";
    }
  }
})();
