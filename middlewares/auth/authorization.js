const {PERMS} = require('../../constants');
const {getRoleById} = require('../../repositories');

function permissionRequired(permission) {
  return async function (req, res, next) {
    const {user} = req;
    const userRole = await getRoleById(user.roleId);
    const userPermissions = userRole.permissions;

    const [resource] = permission.trim().split(':');
    const fullAccessPermission = `${resource}:FullAccess`;
    let authorized = false;
    for (const userPerm of userPermissions) {
      if (userPerm === permission || userPerm === fullAccessPermission) {
        authorized = true;
        break;
      }
    }
    if (authorized) {
      next();
    } else {
      next(new Error('You are not authorized to perform this action!'));
    }
  };
}

module.exports = {permissionRequired};
