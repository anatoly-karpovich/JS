import { getMaxId, getCompanyById, getLastIdForCompany, employeesCountHelper } from "../Fixtures/helpers.js";
import { Enterprise } from "./Enterprise.js";
import { Department } from "./Department.js";

export class Company {
  constructor(enterprises = []) {
    this.enterprises = enterprises;
  }
  addEnterprise(name) {
    let maxId = getMaxId(this.enterprises) + 1;
    const enterprise = new Enterprise(maxId, name);
    this.enterprises.push({ enterprise });
  }

  addDepartment(enterpriseId, deptName, employees) {
    const comp = getCompanyById(this.enterprises, enterpriseId);
    if (comp) {
      const newId = getMaxId(this.enterprises) + 1;
      const department = new Department(newId, deptName, employees);
      comp.enterprise.departments.push({ department });
    } else {
      throw new Error("There is no enterprise to add the department");
    }
  }

  getStructure() {
    let result = "";
    this.enterprises.forEach((company) => {
      let depts = [];
      let count = 0;
      depts.push(company.enterprise.name);
      if (company.enterprise.departments) {
        company.enterprise.departments.forEach((dept) => {
          count += parseInt(dept.department.employees_count, 10);
          if (dept.department.employees_count) {
            depts.push(`- ${dept.department.name} (${dept.department.employees_count} ${employeesCountHelper(dept.department.employees_count)})`);
          } else depts.push(`- ${dept.department.name} (нет сотрудников)`);
        });
        if (count) {
          depts[0] += ` (${count} ${employeesCountHelper(count)})`;
        } else depts[0] += ` (нет сотрудников)`;
      }

      result += depts.join(`\n\ `) + `\n\ `;
    });
    return result;
  }

  editEnterprise(id, newName) {
    const comp = getCompanyById(id);
    comp.enterprise.name = newName;
  }
}
