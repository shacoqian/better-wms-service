'use strict';

module.exports = (router, controller) => {
  router.post('/login', controller.users.login)
  router.get('/users', controller.users.list)
}
