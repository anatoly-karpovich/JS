const http = require("http");

const url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=6e0cd49a4bfc9e9e86a75ca9d4dad3dc&base=EUR&symbols=USD&format=1";
const exchange = function (currentCurency, number, convertCurrency) {
  http
    .get(url, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(body);

          switch (currentCurency) {
            case "USD":
              convertCurrency = Math.round(number / json.rates.USD);
              break;
            case "EUR":
              convertCurrency = Math.round(number * json.rates.USD);
              break;
          }
          console.log(`${convertCurrency} ${currentCurency}`);
        } catch (error) {
          console.error(error.message);
        }
      });
    })
    .on("error", (error) => {
      console.error(error.message);
    });
};

exchange("EUR", 30, "USD");
exchange("USD", 30, "EUR");
