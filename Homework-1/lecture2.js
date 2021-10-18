// // const lastNames = ['lastname one', 'last name two', 'other name'];


// // function convertStringToUpperCase(arr) {
// //    if (arr.every((el) => typeof el === 'string')) {
// //     return arr.map(el => el.toUpperCase());
// //     }
    
// // } 
// // const convertStringToLowerCase = function (arr) {
// //     const isStringsArray = arr.every((el) => typeof el === 'string');
// //     if (isStringsArray) {
// //       return arr.map(el => el.toLowerCase());
// //     }  
// // }

// // const arr1 = [1,2,3];
// // const arr2 = [4,5];
// // const concatArr = arr1.concat(arr2);
// // const finalArr = [...arr1, ...arr2];
// // console.log(finalArr);

// // const squareNumber = num => num*num;

// // const squareNumberFE = function (num) {
// //     return num*num;
// // }

// const vovelsCounter = (str) => {
//     const vovels = ['a', 'e', 'i', 'o', 'u','y']
//     let counter = 0
//     for(letter of str){
//      if(vovels.includes(letter.toLowerCase())){
//          counter = counter + 1
//       }
//     }
//     return counter
// }

// console.log(vovelsCounter('The current directory is AD-123'));



function getSyllables(word){
    let response = [];
    let isSpecialCase = false;
    let nums = (word.match(/[aeiou]/gi) || []).length;
    //debugger;
    if (isSpecialCase == false && (word.match(/[0123456789]/gi) || []).length == word.length ){
        // has digits
        response.push(word);
        isSpecialCase = true;
    }

    if (isSpecialCase == false && word.length < 4){
        // three letters or less
        response.push(word);
        isSpecialCase = true;
    } 

    if (isSpecialCase == false && word.charAt(word.length-1) == "e"){
        if (isVowel(word.charAt(word.length-2)) == false){
            let cnt = (word.match(/[aeiou]/gi) || []).length;
            if (cnt == 3){
                if (hasDoubleVowels(word)){
                    // words like "piece, fleece, grease"
                    response.push(word);
                    isSpecialCase = true;
                }
            }
            if (cnt == 2){
                // words like "phase, phrase, blaze, name", 
                if (hasRecurringConsonant(word) == false) {
                // but not like "syllable"
                response.push(word);
                isSpecialCase = true;
                }

            }                    
        }
    }

    if (isSpecialCase == false){
        const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
        response = word.match(syllableRegex);
    }

    return response;
} 
console.log(getSyllables('yellow'));