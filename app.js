const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {getAllEmployeesController, loginController} = require('./controllers');
const {authenticationRequired, permissionRequired} = require('./middlewares');
const {resFromError} = require('./utilities');
const {PERMS} = require('./constants');

// Use this middleware, so that we can access request body via req.body
app.use(express.json());
// Use this middleware, so that we can access cookies via req.cookies
app.use(cookieParser());

app.post('/login', loginController);
app.get('/employees', authenticationRequired, permissionRequired(PERMS.Employees_List), getAllEmployeesController);

// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

module.exports = {app};
