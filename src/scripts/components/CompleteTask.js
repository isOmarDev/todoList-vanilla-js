import { tasks } from "../classes/tasks.js";
import { tasksDom } from "../classes/tasksDom.js";
import { TaskCheckboxInput } from "./TaskItem.js";

export function CompleteTask(task) {
  const checkbox = TaskCheckboxInput(task.completed);
  
  checkbox.addEventListener("click", handleCompleteTask);

  function handleCompleteTask() {
    checkboxInput.checked = true;
    tasks.update(task.id, task.description, checkboxInput.checked);
    tasksDom.renderActiveTasksList();
    tasksDom.renderCompletedTasksList();
  }

  return checkbox;
}
