import { Animal } from "./Animal.js";

export class CatLike extends Animal {
  constructor(type, color, weight, height, place_of_origin, isSafeToPet) {
    super(type, color, weight, height, place_of_origin);
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
