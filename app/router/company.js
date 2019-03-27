'use strict';

module.exports = (router, controller) => {
  router.get('/companys', controller.company.list)
}
