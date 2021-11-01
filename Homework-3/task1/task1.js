const http = require("http");
const fs = require("fs");

let url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=9bc58c7b22f75d53016d2db0f670c39c&symbols=USD,AUD,CAD,PLN,MXN&format=1";

http
  .get(url, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      try {
        const json = JSON.parse(body);
        console.log(json.rates.USD);

        let products = JSON.parse(fs.readFileSync("./data.json"));
        let clonedProducts = JSON.parse(JSON.stringify(products));

        products.data.forEach((el) => {
          el.Prices.Currency = "USD";
        });

        clonedProducts.data.forEach((el) => {
          el.Prices.Price = Math.round(
            ((el.Prices.Price / json.rates.USD) * 100) / 100
          );

          el.Prices["Retail Price"] = Math.round(
            ((el.Prices["Retail Price"] / json.rates.USD) * 100) / 100
          );

          el.Prices["Wholesale Price"] = Math.round(
            ((el.Prices["Wholesale Price"] / json.rates.USD) * 100) / 100
          );

          el.Prices.Currency = "EUR";
        });

        fs.writeFileSync("dataNotChanged.json", JSON.stringify(products));
        fs.writeFileSync("dataCloned.json", JSON.stringify(clonedProducts));
      } catch (error) {
        console.error(error.message);
      }
    });
  })
  .on("error", (error) => {
    console.error(error.message);
  });
