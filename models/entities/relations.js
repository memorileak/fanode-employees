const {Employees} = require('./employees');
const {Titles} = require('./titles');

Employees.hasMany(Titles, {sourceKey: 'empNo', foreignKey: 'emp_no'});
Titles.belongsTo(Employees, {targetKey: 'empNo', foreignKey: 'emp_no'});
