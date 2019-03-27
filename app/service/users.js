'use strict'

const BaseService = require('./base')

class UsersService extends BaseService {
  
  async createAdmin(data) {
    return this.ctx.model.users.bind(data).save()
  }

  /**
   * @description 根据邮件获取用户信息
   */
  async findOneByEmail(email) {
    console.log(this.ctx.model.Users)
    return await this.ctx.model.Users.findOne({
      attributes: ['user_id', 'user_uuid', 'user_name', 'telphone', 'password', 'salt', 'nick_name', 'email'],
      where: {
        disabled: 1,
        email: email
      }
    })
  }

  /**
   * @description 分页获取用户信息
   */
  async findAll() {
    const { Users } = this.app.model
    console.log(this.app.model)

    const offset = this.ctx.getPageOffset(),
      limit = this.ctx.getPageSize()

    return Users.findAndCountAll({
      attributes: ['user_id', 'user_uuid', 'user_name', 'telphone', 'nick_name', 'email'],
      where: {
        disabled: 1,
      },
      offset,
      limit
    })
  }


}

module.exports = UsersService