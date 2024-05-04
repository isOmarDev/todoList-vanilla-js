export function createLiElement(taskId) {
  const liElement = document.createElement("li");
  liElement.setAttribute("id", taskId);
  liElement.classList.add("tasks__list-item");
  return liElement;
}

export function createInputElement() {
  const checkboxElement = document.createElement("input");
  checkboxElement.classList.add("tasks__list-checkbox");
  checkboxElement.setAttribute("type", "checkbox");
  return checkboxElement;
}

export function createLabelElement(labelText) {
  const labelElement = document.createElement("label");
  labelElement.classList.add("tasks__list-label");
  labelElement.textContent = labelText;
  return labelElement;
}
