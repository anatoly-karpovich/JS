// Implement a function called pinCodeGenerator. This function should take one argument called length and return a randomly generated pin code of a given length.

// For example,  pinCodeGenerator(5) → 73473

const pinCodeGenerator = function (length) {
  if (+length) {
    let pinCode = [];
    for (let i = 0; i < length; i++) {
      pinCode.push(Math.floor(Math.random() * 10));
    }
    return pinCode.join("");
  } else return "Please enter integer or >0 value";
};
console.log(pinCodeGenerator("24"));
