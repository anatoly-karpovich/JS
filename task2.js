// Create a function which checks whether a phone number is valid or not. 
// NOTE: You don’t need to test your function with all possible phone numbers, just check if the function will work correctly with the following inputs.

// validatePhoneNymber(067 734 4343) → true
// validatePhoneNymber(094 643 7432) → true
// validatePhoneNymber(083 jfvj 4554) → false
// validatePhoneNymber(Anton0938 884) → false
// validatePhoneNymber(0437348348) → true

const validatePhoneNymber = (phoneNumber) => {
phoneNumber = phoneNumber.split(' ').join('')
    if (+phoneNumber) {return true
} else return false;
}

console.log(validatePhoneNymber('067 734 4343')); 
console.log(validatePhoneNymber('094 643 7432')); 
console.log(validatePhoneNymber('083 jfvj 4554')); 
console.log(validatePhoneNymber('Anton0938 884')); 
console.log(validatePhoneNymber('0437348348'));


console.log('А теперь через регулярку:');

const validatePhoneNymberByRegexp = function (phoneNumber) {
  const regexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(phoneNumber.match(regexp)) {
      return true;
     } else return false;
        
}
console.log(validatePhoneNymberByRegexp('067 734 4343')); 
console.log(validatePhoneNymberByRegexp('094 643 7432')); 
console.log(validatePhoneNymberByRegexp('083 jfvj 4554')); 
console.log(validatePhoneNymberByRegexp('Anton0938 884')); 
console.log(validatePhoneNymberByRegexp('0437348348'));