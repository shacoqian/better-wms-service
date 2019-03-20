'use strict'

const BaseController  = require('./base')

class UsersController extends BaseController {
  async createAdmin() {

  }

  /**
   * @descrition 登录系统
   * @params {string} email 
   * @params {string} password 密码
   */
  async login() {

    const { ctx } = this
    const { email, password } = ctx.request.query
    const rules = require('../rules/users/login')
    try {
      ctx.validate(rules, { email, password })
      

      
    } catch( e ) {
      ctx.fail(e)
    }
    
    // console.log(validateResult)
    // if (! validateResult) {
    //   return 
    // }



  }
}

module.exports = UsersController