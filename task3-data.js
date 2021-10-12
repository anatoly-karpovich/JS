// У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
// Итого: 8495 гривен, средняя цена товара 700 гривен - пример сообщения в консоле

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
let sumPrices = 0;
prices.forEach((price) => {
sumPrices += +price;
});
console.log(`Итого: ${sumPrices} гривен, средняя цена товара ${sumPrices/prices.length} гривен`);