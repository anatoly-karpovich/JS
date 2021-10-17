// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let newString = '';
    string.split('').forEach((el, index) => {
      if (el === el.toUpperCase() && index>0) {
        newString += ' ';
        newString += el;
      }  else {
        newString += el;
      }
    });
    return newString;
}



