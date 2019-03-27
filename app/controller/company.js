'use strict'

const BaseController = require('./base')

class CompannyController extends BaseController {
  async list() {
    const companys = await this.ctx.service.company.findAll()
    this.ctx.success(companys)
  }
}

module.exports = CompannyController