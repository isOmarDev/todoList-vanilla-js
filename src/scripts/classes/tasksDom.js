import { tasks } from "./tasks.js";
import { TaskItem, TasksEmptyMessage } from "../components/TaskItem.js";

import {
  ACTIVE_TASKS_LIST_ID,
  COMPLETED_TASKS_LIST_ID,
  ACTIVE_TASKS_COUNT_ID,
  COMPLETED_TASKS_COUNT_ID,
  EMPTY_MSG,
} from "../constants/tasks.js";

export class TasksDom {
  constructor(tasks) {
    this.tasks = tasks;
  }

  renderOnMount() {
    this.renderCompletedTasksList();
    this.renderActiveTasksList();
  }

  renderActiveTasksList() { 
    const listElement = document.getElementById(ACTIVE_TASKS_LIST_ID);
    const activeTasks = this.tasks.getActive();

    if (activeTasks.length === 0) {
      this.clearTasksList(listElement);
      const liElement = TasksEmptyMessage(EMPTY_MSG);
      listElement.appendChild(liElement);
      this.setTasksCount(ACTIVE_TASKS_COUNT_ID, 0);
    } else {
      this.clearTasksList(listElement);
      const fragment = this.appendTasksToFragment(activeTasks);
      listElement.appendChild(fragment);
      this.setTasksCount(ACTIVE_TASKS_COUNT_ID, activeTasks.length);
    }
  }

  renderCompletedTasksList() {
    const listElement = document.getElementById(COMPLETED_TASKS_LIST_ID);
    const completedTasks = this.tasks.getCompleted();

    this.clearTasksList(listElement);
    const fragment = this.appendTasksToFragment(completedTasks);
    listElement.appendChild(fragment);
    this.setTasksCount(COMPLETED_TASKS_COUNT_ID, completedTasks.length);
  }

  appendTasksToFragment(tasks) {
    const listFragment = document.createDocumentFragment();
    tasks.forEach((task) => {
      listFragment.appendChild(TaskItem(task));
    });
    return listFragment;
  }

  setTasksCount(countId, count) {
    const container = document.getElementById(countId);
    container.textContent = count;
  }

  clearTasksList(listElement) {
    while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }
}

// TasksDom instance
export const tasksDom = new TasksDom(tasks);

// Render tasks on load
document.addEventListener("DOMContentLoaded", () => tasksDom.renderOnMount());
