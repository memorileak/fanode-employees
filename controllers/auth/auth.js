const jwt = require('jsonwebtoken');
const {getUserWithUsername} = require('../../repositories');
const {resFromData} = require('../../utilities');

const {secret} = process.env;

console.log('Secret: ', secret);

async function loginController(req, res, next) {
  const {username, password} = req.body || {};
  const user = await getUserWithUsername(username);
  if (user) {
    if (password === user.password) {
      const token = jwt.sign({username}, secret);
      res.json(resFromData(token));
    } else {
      next(new Error('Wrong username or password!'));
    }
  } else {
    next(new Error('Wrong username or password!'));
  }
}

module.exports = {loginController};
