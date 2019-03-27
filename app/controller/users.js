'use strict'

const BaseController  = require('./base')

class UsersController extends BaseController {

  /**
   * @descrition 登录系统
   * @params {string} email 
   * @params {string} password 密码
   */
  async login() {
    const { ctx } = this
    const { email, password } = ctx.request.body
    const rules = require('../rules/users/login')
    const { encryptPassword } = require('../util/users')
    console.log(email)
    try {
      ctx.validate(rules, { email, password })
      let userInfo = await this.ctx.service.users.findOneByEmail(email)
      if (! userInfo) 
        return ctx.fail('用户不存在')

      let enpassword = encryptPassword(password, userInfo.salt)
      if (enpassword.encryptPassword != userInfo.password) 
        return ctx.fail('用户名或密码错误！')

      if (! this.app.setLoginUser(userInfo.user_uuid, userInfo)) 
        return ctx.fail('登录失败，请重试')
      return ctx.success(userInfo)
    } catch( e ) {
      return ctx.fail(e)
    }
  }

  /**
   * @description 退出登录
   * @params {string} user_uuid
   */
  async logout() {
    let {
      user_uuid
    } = this.ctx.request.query
    await this.ctx.app.removeLoginUser(user_uuid)
    return this.ctx.success()
  }

  /**
   * @description 获取用户列表
   * 
   */
  async list() {
    let users = await this.ctx.service.users.findAll()
    return this.ctx.success(users)
  }

}

module.exports = UsersController