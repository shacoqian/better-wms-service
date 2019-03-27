'use strict'

const BaseService = require('./base')

class AuthOrgController extends BaseService {
  constructor() {
    super(...arguments)
    const { AuthOrg, AuthOrgType } = this.app.model

    AuthOrg.hasOne(AuthOrgType, {
      foreignKey: 'org_type_id',
      sourceKey: 'org_type_id',
    })
    

  }

  async findAll() {
    const { AuthOrg, AuthOrgType } = this.app.model
    return AuthOrg.findAndCountAll({
      attributes: ['org_id', 'org_name', 'org_type', 'org_type_id', 'creator', 'creator_name', 'ancestor'],
      include: {
        model: AuthOrgType,
        attributes: [ 'org_type_name'],
        where: {
          disabled: 1,
        },
        required:false
      },
      where: {
        disabled: 1,
        ancestor: '0-1-',
        org_type: 'department'
      }
    })
  }

}
module.exports = AuthOrgController