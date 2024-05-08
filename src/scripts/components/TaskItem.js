import { tasks } from "../classes/tasks.js";
import { UpdateTask } from "./UpdateTask.js";
import { DeleteTask } from "./DeleteTask.js";

import {
  TASKS_LIST_ITEM_CLASS,
  TASKS_LIST_LABEL_CLASS,
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

/* Create Input Label */
export function createLabelElement() {
  const labelElement = document.createElement("label");
  labelElement.classList.add(TASKS_LIST_LABEL_CLASS);
  return labelElement;
}

/* Create Chechbox Input */
export function createCheckboxInputElement(isComplete) {
  const checkboxElement = document.createElement("input");
  checkboxElement.classList.add(TASKS_LIST_CHECKBOX_CLASS);
  checkboxElement.setAttribute("type", "checkbox");

  if (isComplete) {
    checkboxElement.setAttribute("checked", isComplete);
    checkboxElement.setAttribute("disabled", true);
  }

  return checkboxElement;
}

/* Create Text Input */
export function createTextInputElement(task) {
  const textInputElement = document.createElement("input");
  textInputElement.setAttribute("id", "task-input");
  textInputElement.classList.add(TASKS_LIST_TEXT_INPUT_CLASS);
  textInputElement.setAttribute("type", "text");
  textInputElement.setAttribute("value", task.description);
  textInputElement.setAttribute("disabled", true);
  textInputElement.setAttribute("maxlength", "50");

  textInputElement.addEventListener("keydown", handleKeyDown)
  textInputElement.addEventListener("blur", handleBlur)

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

  return textInputElement;
}

/* Create Task ACtions */
export function createTaskActionsElement() {
  const taskActionsElement = document.createElement("div");
  taskActionsElement.setAttribute("id", "task-actions");
  taskActionsElement.classList.add(TASKS_TASK_ACTION_CLASS);
  return taskActionsElement;
}

/* Task Label Component */
function TaskLabel(task) {
  const taskLabelElement = createLabelElement(task.description);
  const checkboxInputElement = createCheckboxInputElement(task.completed);
  const textInputElement = createTextInputElement(task);
  taskLabelElement.append(checkboxInputElement, textInputElement);
  return taskLabelElement;
}

/* Task Actions Component */
function TaskActions(taskId) {
  const taskActionElement = createTaskActionsElement();
  taskActionElement.append(UpdateTask(), DeleteTask(taskId));
  return taskActionElement
}


/* Task Item Component */
export function TaskItem(task) {
  const liElement = createLiElement(task);
  liElement.append(TaskLabel(task), TaskActions(task.id));
  return liElement;
}

/* Tass Empty Message Component */
export function TasksEmptyMessage(message) {
  const liElement =document.createElement("li");
  liElement.setAttribute("id", "tasks-empty-message");
  liElement.classList.add("tasks__list-empty-msg");
  liElement.textContent = message;
  return liElement;
}
