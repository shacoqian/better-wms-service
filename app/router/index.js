'use strict';

const glob = require('glob')
const basePath = 'app/router'
module.exports = app => {
  const { controller, router } = app
  glob(`${app.baseDir}/${basePath}/!(index).js`, function(err, files) {
    files.forEach(item => {
      const routers = require(`${item}`)
      routers(router, controller)
    })
  })
}
