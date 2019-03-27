'use strict';

module.exports = (router, controller) => {
  router.get('/orgs', controller.authOrg.list)
}
