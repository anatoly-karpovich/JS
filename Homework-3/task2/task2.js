const fs = require("fs");
let persons;

persons = JSON.parse(fs.readFileSync("./data.json"));
let personsNew = [];
persons.forEach((el) => {
  if (
    persons.filter((item) => {
      return JSON.stringify(item) === JSON.stringify(el);
    }).length < 2
  ) {
    personsNew.push(el);
  }
});
console.log(personsNew.length);

fs.writeFileSync("dataNew.json", JSON.stringify(personsNew));
