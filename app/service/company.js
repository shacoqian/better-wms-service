'use strict'

const BaseService = require('./base')

class UsersService extends BaseService {

  async findAll() {
    const offset = this.ctx.getPageOffset(),
    limit = this.ctx.getPageSize()

    return this.app.model.Company.findAndCountAll({
      attributes: ['company_id', 'company_name', 'contact_name', 'contact_number', 'telphone',
        'email', 'created_at', 'updated_at', 'version', 'creator_name'],
      where: {
        disabled: 1
      },
      offset,
      limit
    }) 

    
  }


}

module.exports = UsersService