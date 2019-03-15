'use strict';

module.exports = (router, controller) => {
  router.get('/', controller.test.index)
}
