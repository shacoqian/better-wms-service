'use strict'

const BaseService = require('./base')

class UsersService extends BaseService {
  
  async createAdmin(data) {
    return this.ctx.model.users.bind(data).save()
  }

  async login(email, password) {
    
  }


}

module.exports = UsersService