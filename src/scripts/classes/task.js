import { generateUniqueId } from "../utils/generateId.js";

export class Task {
  constructor(description) {
    this.id = generateUniqueId();
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }
}
