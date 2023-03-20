const {Sequelize} = require('sequelize');

const connection = new Sequelize('employees', 'root', 'toor', {
  host: 'mysql',
  dialect: 'mysql',
  pool: {
    min: 3,
    max: 3,
  },
});

module.exports = {connection};
