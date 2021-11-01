export class Zoo {
  constructor(
    address,
    area,
    established_date,
    ticket_price,
    workers = [],
    animals = []
  ) {
    this._address = address;
    this._area = area;
    this._established_date = established_date;
    this._ticket_price = ticket_price;
    this._workers = workers;
    this._animals = animals;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value === "string") {
      this._address = value;
    } else {
      console.log("Invalid input: address must be set to a String.");
    }
  }

  get area() {
    return this._area;
  }

  set area(value) {
    if (typeof value === "number") {
      this._area = value;
    } else {
      console.log("Invalid input: established_date must be set to a Number.");
    }
  }

  get established_date() {
    return this._established_date;
  }

  set established_date(value) {
    if (typeof value === "number") {
      this._established_date = value;
    } else {
      console.log("Invalid input: established_date must be set to a Number.");
    }
  }

  get ticket_price() {
    return this._ticket_price;
  }

  set ticket_price(value) {
    if (typeof value === "number") {
      this._ticket_price = value;
    } else {
      console.log("Invalid input: ticket_price must be set to a Number.");
    }
  }
  addWorker(value) {
    this._workers.push(value);
  }
  removeWorker(index) {
    this._workers.splice(index, 1);
  }
  showWorkers() {
    return this._workers;
  }
  editWorkers(index) {
    this._workers[index];
  }
  addAnimal(value) {
    this._animals.push(value);
  }
  removeAnimal(index) {
    this._animals.splice(index, 1);
  }
  showAnimals() {
    return this._animals;
  }
  showAnimalbyId(id) {
    return this._animals[id];
  }
}
