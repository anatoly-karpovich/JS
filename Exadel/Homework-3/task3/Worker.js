export class Worker {
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
