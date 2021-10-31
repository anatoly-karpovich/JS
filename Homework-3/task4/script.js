String.prototype.removeSpecialCharacters = function () {
  return this.replace(/[^\w\s]/g, "");
};
console.log("H^%^E!!L*^L??OO#$".removeSpecialCharacters());
