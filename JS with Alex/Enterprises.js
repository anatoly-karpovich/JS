const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

//Helpers
const employeesCountHelper = function (number) {
  if (number) {
    if (number == 1) return "сотрудник";
    else if (number > 1 && number < 5) return "сотрудника";
    else return "сотрудников";
  } else return "(нет сотрудников)";
};
const getNameById = function (num) {
  let name = [];
  const comp = enterprises.find((elem) => {
    elem.id == num;
  });
  if (comp) {
    name.push(comp.name);
  } else {
    enterprises.forEach((company) => {
      const dept = company.departments.find((el) => {
        return el.id == num;
      });
      if (dept) {
        name.push(company.name);
      }
    });
  }
  return name.join("\n");
};

const getNameByName = function (str) {
  let name = [];
  const comp = enterprises.find((elem) => {
    return elem.name === str;
  });
  if (comp) {
    name.push(comp.name);
  } else {
    enterprises.forEach((company) => {
      const dept = company.departments.find((el) => {
        return el.name == str;
      });
      if (dept) {
        name.push(company.name);
      }
    });
  }
  return name.join("\n");
};

const getMaxId = function (company) {
  let maxId = company[0].id;
  company.forEach((el) => {
    if (maxId < el.id) {
      maxId = el.id;
    }
    if (el.departments) {
      el.departments.forEach((elem) => {
        if (maxId < elem.id) {
          maxId = elem.id;
        }
      });
    }
  });
  return maxId;
};

const getCompanyById = function (val) {
  const comp = enterprises.find((elem) => {
    return elem.id === val;
  });
  return comp;
};

const getDepartmentById = function (val) {
  let department;
  const comp = enterprises.find((elem) => {
    elem.id == val;
  });
  if (comp) {
    department = comp;
  } else {
    enterprises.forEach((company) => {
      const dept = company.departments.find((el) => {
        return el.id == val;
      });
      if (dept) {
        department = dept;
      }
    });
  }

  return department;
};

const getLastIdForCompany = function (val) {
  const comp = getCompanyById(val);
  const id = getMaxId(comp.departments);
  return id;
};

// ### Задания:

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
// **Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

const getDeptartments = function (companies) {
  companies.forEach((company) => {
    let depts = [];
    let count = 0;
    depts.push(company.name);
    if (company.departments) {
      company.departments.forEach((dept) => {
        count += parseInt(dept.employees_count, 10);
        if (dept.employees_count) {
          depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`);
        } else depts.push(`- ${dept.name} (нет сотрудников)`);
      });

      if (count) {
        depts[0] += ` (${count} ${employeesCountHelper(count)})`;
      } else depts[0] += ` (нет сотрудников)`;
    }
    console.log(depts.join(`\n\ `));
  });
};
getDeptartments(enterprises);

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function (value) {
  if (parseInt(value, 10)) {
    console.log(getNameById(value));
  } else if (typeof value == "string") {
    console.log(getNameByName(value));
  } else throw new Error("Type of entered value is not Number or String");
};
getEnterpriseName("Отдел маркетинга");
getEnterpriseName(4);

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// addEnterprise("Название нового предприятия")

const addEnterprise = function (name) {
  let maxId = getMaxId(enterprises);
  maxId++;
  enterprises.push({ id: maxId, name: name, departments: [] });
};

addEnterprise("Предприятие 4");

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// addDepartment(1, "Название нового отдела")

const addDepartment = function (num, deptName, employees) {
  let lastId = getLastIdForCompany(num);
  lastId++;
  const comp = getCompanyById(num);
  comp.departments.push({ id: lastId, name: deptName, employees_count: employees });
};

addDepartment(5, "Отдел AQA", 10);

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function (id, newName) {
  const comp = getCompanyById(id);
  comp.name = newName;
};
editEnterprise(5, "AQA company");

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// editDepartment(7, "Новое название отдела")

const editDepartment = function (id, newName) {
  const dept = getDepartmentById(id);
  dept.name = newName;
};
editDepartment(7, "AQA dept");

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// deleteEnterprise(1)
const deleteEnterprise = function (id) {
  enterprises.forEach((el, index) => {
    if (el.id === id) {
      enterprises.splice(index, 1);
    }
  });
};
deleteEnterprise(1);

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// deleteDepartment(3)

const deleteDepartment = function (id) {
  enterprises.forEach((el, count) => {
    if (el.departments) {
      if (
        el.departments.find((obj) => {
          return obj.id === id;
        })
      ) {
        el.departments.forEach((elem, index) => {
          if (elem.id === id) {
            enterprises[count].departments.splice(index, 1);
          }
        });
      }
    }
  });
};
deleteDepartment(8);
//getDeptartments(enterprises);

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия.
//В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

const transferEmployees = function (currentId, newId) {
  const currentDepartment = getDepartmentById(currentId);
  const newDepartment = getDepartmentById(newId);
  newDepartment.employees_count += currentDepartment.employees_count;
  currentDepartment.employees_count = 0;
};

transferEmployees(6, 7);
getDeptartments(enterprises);
