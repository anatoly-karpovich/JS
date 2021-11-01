import { Animal } from "./Animal.js";

export class Bird extends Animal {
  constructor(type, color, weight, height, place_of_origin, isFlying) {
    super(type, color, weight, height, place_of_origin);
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
