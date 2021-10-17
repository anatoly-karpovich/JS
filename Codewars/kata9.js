// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.split('').map((el, index) => {
        return el === el.toUpperCase() && index>0 ? ' '.concat(el) : el
    }).join('');
}

console.log(solution('ToUpperCase'))
