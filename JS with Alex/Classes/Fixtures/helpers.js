export function getMaxId(company) {
  if (!company.length) {
    return 0;
  }
  let maxId = 1;
  company.forEach((el) => {
    if (maxId < el.enterprise.id) {
      maxId = el.enterprise.id;
    }
    if (el.enterprise.departments) {
      el.enterprise.departments.forEach((elem) => {
        if (maxId < elem.department.id) {
          maxId = elem.department.id;
        }
      });
    }
  });
  return parseInt(maxId, 10);
}

export function getCompanyById(arr = [], val) {
  const comp = arr.find((elem) => {
    return elem.enterprise.id === val;
  });
  if (comp) {
    return comp;
  }
}

export function getDepartmentById(arr = [], val) {
  let department;
  const comp = getCompanyById(arr, val);
  if (comp) {
    department = comp;
  } else {
    arr.forEach((company) => {
      const dept = getCompanyById(company.departments, val);
      if (dept) {
        department = dept;
      }
    });
  }

  return department;
}

export function getLastIdForCompany(arr = [], val) {
  const comp = getCompanyById(arr, val);
  if (comp) {
    const id = getMaxId(comp.departments);
    return id;
  }
}

export function employeesCountHelper(number) {
  if (number) {
    if (number == 1) return "сотрудник";
    else if (number > 1 && number < 5) return "сотрудника";
    else return "сотрудников";
  } else return "(нет сотрудников)";
}
