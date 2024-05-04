import {
  createLiElement,
  createLabelElement,
  createInputElement,
} from "../components/task.js";

class Tasks {
  constructor() {
    this.tasks = [
      { id: 1, description: "Finish home work" },
      { id: 2, description: "Go to gym" },
      { id: 3, description: "Warzone with the homies" },
    ];
  }

  get() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  update(taskId, description) {
    const taskIndex = this.tasks.findIndex((item) => item.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].description = description;
    }
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  render() {
    const listElement = document.getElementById("active-tasks-list");
    const fragment = document.createDocumentFragment();

    this.tasks.forEach((item) => {
      const liElement = createLiElement(item.id);
      const labelElement = createLabelElement(item.description);
      const inputElement = createInputElement();

      liElement.appendChild(labelElement).appendChild(inputElement);
      fragment.appendChild(liElement);
    });

    // Append the <li> element to the <ul> element
    listElement.appendChild(fragment);
  }
}

// Create tasks instance
export const tasks = new Tasks();

// Render tasks on load
document.addEventListener("DOMContentLoaded", () => tasks.render());
