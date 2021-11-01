import { Animal } from "./Animal.js";
export class Snake extends Animal {
  constructor(type, color, weight, height, place_of_origin, isPoisonous) {
    super(type, color, weight, height, place_of_origin);
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

  get getAnimalInfo() {
    return super.getAnimalInfo + `, isPoisonous - ${this._isPoisonous}`;
  }
}
