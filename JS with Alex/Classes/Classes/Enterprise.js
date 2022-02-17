export class Enterprise {
  constructor(id, name, departments = []) {
    this.id = id;
    this.name = name;
    this.departments = departments;
  }
}
