'use strict'

const BaseController = require('./base')

class authOrgController extends BaseController {

  async list() {
    const authorgs = await this.ctx.service.authOrg.findAll()
    return this.ctx.success(authorgs)
  }
}

module.exports = authOrgController
