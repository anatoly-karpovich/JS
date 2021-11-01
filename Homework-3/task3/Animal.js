export class Animal {
  constructor(type, color, weight, height, place_of_origin) {
    this._type = type;
    this._color = color;
    this._weight = weight;
    this._height = height;
    this._place_of_origin = place_of_origin;
  }
  get animalInfo() {
    return `Animal info is: type - ${this._type}, color - ${this._color}, weight - ${this._weight}, height - ${this._height}, place of origin - ${this._place_of_origin}`;
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

// get getAnimalInfo() {
//   return `Animal info is: id - ${this._id} type - ${this._type}, color - ${this._color}, weight - ${this._weight}, height - ${this._height}, place of origin - ${this._placeOfOrigin}`
// }
