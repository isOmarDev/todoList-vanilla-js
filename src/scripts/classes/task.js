import { uniqueId } from "../utils/generateId.js";

export class Task {
  constructor(description) {
    this.id = uniqueId();
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }
}
