const {DataTypes} = require('sequelize');
const {connection} = require('../connections/connection');

const Titles = connection.define(
  'titles',
  {
    empNo: {
      type: DataTypes.NUMBER,
      field: 'emp_no',
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      field: 'title',
    },
    fromDate: {
      type: DataTypes.DATE,
      field: 'from_date',
      primaryKey: true,
    },
    toDate: {
      type: DataTypes.DATE,
      field: 'to_date',
      primaryKey: true,
    },
  },
  {timestamps: false},
);

module.exports = {Titles};
