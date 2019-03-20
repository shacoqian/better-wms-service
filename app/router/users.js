'use strict';

module.exports = (router, controller) => {
  router.get('/login', controller.users.login)
}
