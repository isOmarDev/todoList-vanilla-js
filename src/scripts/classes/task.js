import { uniqueId } from "../utils/generateId";

class Task {
  constructor(description) {
    this.id = uniqueId();
    this.description = description;
    this.createdAt = new Date();
  }
}
