// There is an array with the most popular last names, but some first elements don’t look like valid last names. Delete the first two elements of the array.

const arr = [
  "НПП Прізвище Кіл-ть Приблизно",
  "______________________в_ базіпо_Україні",
  "0-rt-rgfr",
  "8484fjdfkf",
  "МЕЛЬНИК",
  "ШЕВЧЕНКО",
  "БОЙКО",
  "КОВАЛЕНКО",
  "БОНДАРЕНКО",
  "ТКАЧЕНКО",
  "КОВАЛЬЧУК",
  "КРАВЧЕНКО",
  "ОЛІЙНИК",
];

//Solution 1
const spliceLastNames = function (array) {
  array.splice(0, 4);
  return array;
};
console.log(spliceLastNames(arr));

//Solution 2
// const sliceLastNames = function (array) {
//   const arrFinal = array.slice(4);
//   return arrFinal;
// };
// console.log(sliceLastNames(arr));
