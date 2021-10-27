const fs = require("fs");
let persons;

persons = JSON.parse(fs.readFileSync("./data.json"));
let personsNew = [];

persons.forEach((el) => {
  if (personsNew.indexOf(JSON.stringify(el)) === -1) {
    personsNew.push(JSON.stringify(el));
  }
});
console.log(personsNew.length);

fs.writeFileSync("dataNew.json", JSON.stringify(personsNew));
