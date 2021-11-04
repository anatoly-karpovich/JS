// Create currency convertor using https://exchangeratesapi.io/.
// A user should be able to pass a currency and amount of money in a function and get the amount of money in the desired currency in output.
// currencyConvertor(USD, 40, EUR) ⇒ 35 EUR

// Learn about async/await syntax.
// Reimplement the first task with async/await syntax.

const url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=6e0cd49a4bfc9e9e86a75ca9d4dad3dc&base=EUR&symbols=USD&format=1";

async function currencyConvertor(currentCurrency, number, convertCurrency) {
  const resolve = await fetch(url);
  const exchangerContent = await resolve.json();
  const exchangeRate = exchangerContent.rates.USD;

  if (currentCurrency === "USD") {
    convertCurrency = Math.round(number / exchangeRate);
  } else if (currentCurrency === "EUR") {
    convertCurrency = Math.round(number * exchangeRate);
  }
  console.log(`${convertCurrency} ${currentCurrency}`);
}

currencyConvertor("EUR", 30, "USD");
currencyConvertor("USD", 30, "EUR");
