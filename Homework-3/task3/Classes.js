class Zoo {
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

class Animal {
  constructor(type, color, weight, height, place_of_origin) {
    this._type = type;
    this._color = color;
    this._weight = weight;
    this._height = height;
    this._place_of_origin = place_of_origin;
  }
  get animalInfo() {
    return this;
  }

  set weight(value) {
    if (typeof value === "number") {
      this._weight = value;
    } else {
      console.log("Invalid input: weight must be set to a Number.");
    }
  }

  set height(value) {
    if (typeof value === "number") {
      this._height = value;
    } else {
      console.log("Invalid input: height must be set to a Number.");
    }
  }
}

class Snakes extends Animal {
  constructor(color, weight, isPoisonous) {
    super(color, weight);
    this._isPoisonous = isPoisonous;
  }

  set isPoisonous(value) {
    if (typeof value === "boolean") {
      this._isPoisonous = value;
    } else {
      console.log("Invalid input: isPoisonous must be set to a Boolean.");
    }
  }
  set weight(value) {
    if (typeof value === "number") {
      this._weight = value;
    } else {
      console.log("Invalid input: weight must be set to a Number.");
    }
  }

  set color(value) {
    if (typeof value === "string") {
      this._color = value;
    } else {
      console.log("Invalid input: color must be set to a string.");
    }
  }
}

class CatLike extends Animal {
  constructor(color, weight, height, place_of_origin, isSafeToPet) {
    super(color, weight, height, place_of_origin);
    this._isSafeToPet = isSafeToPet;
  }
  set color(value) {
    if (typeof value === "string") {
      this._color = value;
    } else {
      console.log("Invalid input: color must be set to a string.");
    }
  }
  set weight(value) {
    if (typeof value === "number") {
      this._weight = value;
    } else {
      console.log("Invalid input: weight must be set to a Number.");
    }
  }
  set height(value) {
    if (typeof value === "number") {
      this._height = value;
    } else {
      console.log("Invalid input: height must be set to a Number.");
    }
  }

  set place_of_origin(value) {
    if (typeof value === "string") {
      this._place_of_origin = value;
    } else {
      console.log("Invalid input: place_of_origin must be set to a String.");
    }
  }
  set isSafeToPet(value) {
    if (typeof value === "boolean") {
      this._isSafeToPet = value;
    } else {
      console.log("Invalid input: isSafeToPet must be set to a Boolean.");
    }
  }
}

class Birds extends Animal {
  constructor(type, color, weight, height, place_of_origin, isFlying) {
    super(type, color, place_of_origin, weight, height);
    this._isFlying = isFlying;
  }

  set isFlying(value) {
    if (typeof value === "boolean") {
      this._isFlying = value;
    } else {
      console.log("Invalid input: isPoisonous must be set to a Boolean.");
    }
  }
  set place_of_origin(value) {
    if (typeof value === "string") {
      this._place_of_origin = value;
    } else {
      console.log("Invalid input: place_of_origin must be set to a String.");
    }
  }

  set color(value) {
    if (typeof value === "string") {
      this._color = value;
    } else {
      console.log("Invalid input: color must be set to a string.");
    }
  }
}

class Worker {
  constructor(firstName, lastName, phone) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
  }
  set firstName(value) {
    if (typeof value === "string") {
      this._firstName = value;
    } else {
      console.log("Invalid input: FirstName must be set to a String.");
    }
  }

  set lastName(value) {
    if (typeof value === "string") {
      this._lastName = value;
    } else {
      console.log("Invalid input: LastName must be set to a String.");
    }
  }
  set phone(value) {
    if (typeof value === "number") {
      this._phone = value;
    } else {
      console.log("Invalid input: phone must be set to a Number.");
    }
  }
}

const myZoo = new Zoo("Minsk", "300 sq.m.", "31.10.2021", 10);

myZoo.addAnimal("Snake");
myZoo.addAnimal("Elephant");

myZoo.addWorker("Yauhen");
myZoo.addWorker("Anatoly");

const dataWrapper = document.getElementById("root");
const div = document.createElement("div");
div.innerHTML += `
    <h2>Data of the Zoo</h2>
        <p>Adress: ${myZoo._address}</p>
        <p>Area: ${myZoo._area}</p>
        <p>Established date: ${myZoo._established_date}</p>
        <p>Ticket price: ${myZoo._ticket_price}</p>
        <p>Animals: ${myZoo._animals}</p>
        <p>Workers: ${myZoo._workers}</p>
`;
dataWrapper.append(div);

const chicken = new Birds("bird", "black", 2, 0.02, "Belarus", false);
console.log(chicken);

chicken.isFlying = true;
console.log(chicken);

const lion = new Animal("cat", "orange", 100, 1);

console.log(lion.animalInfo);
