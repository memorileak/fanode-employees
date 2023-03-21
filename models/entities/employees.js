const {DataTypes} = require('sequelize');
const {connection} = require('../connections/connection');

const Employees = connection.define(
  'employees',
  {
    empNo: {
      type: DataTypes.NUMBER,
      field: 'emp_no',
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
    },
  },
  {timestamps: false},
);

module.exports = {Employees};
