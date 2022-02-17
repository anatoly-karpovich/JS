import { Company } from "./Classes/Company.js";
import { getCompanyById } from "./Fixtures/helpers.js";

const comp = new Company();
comp.addEnterprise("Comp1");
comp.addEnterprise("Comp2");
comp.addEnterprise("Comp3");

comp.addDepartment(1, "Dept1", 10);
comp.addDepartment(1, "Dept2", 20);
comp.addDepartment(2, "AQA", 30);
comp.addDepartment(3, "QA", 50);

const dataWrapper = document.getElementById("root");
const div = document.createElement("div");
div.innerHTML = comp.getStructure();
dataWrapper.append(div);
console.log(comp.getStructure());
console.log(comp.enterprises);
