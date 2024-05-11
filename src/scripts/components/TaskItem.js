import { tasks } from "../classes/tasks.js";
import { CompleteTask } from "./CompleteTask.js";
import { UpdateTask } from "./UpdateTask.js";
import { DeleteTask } from "./DeleteTask.js";

import {
  TASKS_LIST_ITEM_CLASS,
  TASKS_LIST_LABEL_CLASS,
  TASKS_TASK_INPUTS_CLASS,
  TASKS_TASK_ACTION_CLASS,
  TASKS_LIST_CHECKBOX_CLASS,
  TASKS_LIST_TEXT_INPUT_CLASS,
} from "../constants/tasks.js";

/* Create List Item */
export function createLiElement(task) {
  const liElement = document.createElement("li");
  liElement.setAttribute("id", task.id);
  liElement.classList.add(TASKS_LIST_ITEM_CLASS);

  if (task.completed) { 
    liElement.classList.add("is-complete");
  }

  return liElement;
}

/* Task Input Label */
export function TaskInputLabel() {
  const labelElement = document.createElement("label");
  labelElement.classList.add(TASKS_LIST_LABEL_CLASS);
  return labelElement;
}

/* Task Checkbox Input */
export function TaskCheckboxInput(isComplete) {
  const label = TaskInputLabel();
  const checkboxElement = document.createElement("input");

  checkboxElement.classList.add(TASKS_LIST_CHECKBOX_CLASS);
  checkboxElement.setAttribute("type", "checkbox");

  if (isComplete) {
    checkboxElement.setAttribute("checked", isComplete);
    checkboxElement.setAttribute("disabled", true);
  }

  label.appendChild(checkboxElement);
  return label;
}

/* Task Text Input */
export function TaskTextInput(task) {
  const label = TaskInputLabel();
  const inputElement = document.createElement("input");

  inputElement.setAttribute("id", "task-input");
  inputElement.classList.add(TASKS_LIST_TEXT_INPUT_CLASS);
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("value", task.description);
  inputElement.setAttribute("disabled", true);
  inputElement.setAttribute("maxlength", "50");

  inputElement.addEventListener("keydown", handleKeyDown)
  inputElement.addEventListener("blur", handleBlur)

  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value.trim()!== "") {
      tasks.update(task.id, e.target.value);
      e.target.disabled = true;
    }
  }
  
  function handleBlur(e) {
    if (e.target.value!== task.description) {
      e.target.value = task.description;
    }
    e.target.disabled = true;
  }

  label.appendChild(inputElement);
  return label;
}

/* Task Item Component */
export function TaskItem(task) {
  const liElement = createLiElement(task);
  liElement.append(TaskInputs(task), TaskActions(task));
  return liElement;
}

/* Task Inputs Component */
function TaskInputs(task) {
  const container = document.createElement("div");
  container.setAttribute("id", "task-inputs");
  container.classList.add(TASKS_TASK_INPUTS_CLASS);
  container.append(CompleteTask(task), TaskTextInput(task));
  return container;
}

/* Task Actions Component */
function TaskActions(task) {
  const container = document.createElement("div");
  container.setAttribute("id", "task-actions");
  container.classList.add(TASKS_TASK_ACTION_CLASS);

  if (!task.completed) {
    container.appendChild(UpdateTask());
  }

  container.appendChild(DeleteTask(task));

  return container;
}

/* Tass Empty Message Component */
export function TasksEmptyMessage(message) {
  const liElement =document.createElement("li");
  liElement.setAttribute("id", "tasks-empty-message");
  liElement.classList.add("tasks__list-empty-msg");
  liElement.textContent = message;
  return liElement;
}
