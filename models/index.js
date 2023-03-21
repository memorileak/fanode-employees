module.exports = {
  ...require('./connections/connection'),
  ...require('./entities/employees'),
  ...require('./entities/titles'),
  ...require('./entities/relations'),
};
