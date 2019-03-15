'use strict'

const BaseController = require('./base')

class TestController extends BaseController {
  async index() {
    console.log(1111)
    return this.ctx.success('22323232')
  }
}

module.exports = TestController