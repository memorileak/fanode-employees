const {Employees, Titles} = require('../../models');

async function getAllEmployees() {
  const employees = [];

  // This solution uses eager loading
  const employeeModels = await Employees.findAll({limit: 10, offset: 0, include: Titles});
  for (const emp of employeeModels) {
    const {titles, ...empDataValues} = emp.dataValues;
    empDataValues.titles = titles.map((t) => t.dataValues.title);
    employees.push(empDataValues);
  }

  // This solution uses lazy loading
  // const employeeModels = await Employees.findAll({limit: 10, offset: 0});
  // for (const emp of employeeModels) {
  //   const empDataValues = emp.dataValues;
  //   const titles = await emp.getTitles();
  //   empDataValues.titles = titles.map((t) => t.title);
  //   employees.push(empDataValues);
  // }

  return employees;
}

module.exports = {getAllEmployees};
