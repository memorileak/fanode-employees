const {DataTypes} = require('sequelize');
const {connection} = require('../connections/connection');

connection.define('Employees', {
  empNo: {
    type: DataTypes.NUMBER,
    field: 'emp_no',
  },
  firstName: {
    type: DataTypes.STRING,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
  },
});
