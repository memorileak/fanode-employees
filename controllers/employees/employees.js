const {getAllEmployees} = require('../../repositories');
const {resFromData} = require('../../utilities');

function getAllEmployeesController(req, res) {
  getAllEmployees().then((employees) => {
    res.json(resFromData(employees));
  });
}

module.exports = {getAllEmployeesController};
