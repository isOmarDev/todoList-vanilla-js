class Tasks {
  constructor(intialTasks) {
    this.tasks = intialTasks ?? [];
  }

  getAll() {
    return this.tasks;
  }

  getActive() {
    return this.tasks.filter(task => !task.completed);
  }

  getCompleted() {
    return this.tasks.filter(task => task.completed);
  }

  getCount(status = null) {
    switch (status) {
      case "active": {
        return this.tasks.filter((task) => !task.completed).length;
      }
      case "completed": {
        return this.tasks.filter((task) => task.completed).length;
      }
      default: {
        return this.tasks.length;
      }
    }
  }
  
  add(task) {
    this.tasks.unshift(task);
    this.saveToLocalStorage();
  }

  update(taskId, description) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.description = description;
      this.saveToLocalStorage();
    }
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

// Create tasks instance
const intialTasks = JSON.parse(localStorage.getItem("tasks"));
export const tasks = new Tasks(intialTasks);
