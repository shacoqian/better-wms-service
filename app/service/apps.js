'use strict'
const uuid = require('../util/uuid')

class AppsService extends require('./base') {
  constructor() {
    super(...arguments)

    const {
      Apps: AppsModel,
    } = this.ctx.model

    AppsModel.addHook('beforeCreate', item => {
      item.creator = this.userId
      item.ancestor = this.ancestor
      item.app_uuid = uuid.vv4()
    })

    AppsModel.addHook('beforeValidate', item => {
      item.icon = item.icon && this.ctx.helper.fullImagePath(item.icon)
    })
  }

  /**
   * @description 查询应用列表, 返回包括应用数据和总条数 {rows:[], count: 0}
   * @return {(object)} 应用列表
   */
  async findAll() {
    const apps = await this.ctx.model.Apps.findAndCountAll({
      where: {
        disabled: 1,
        ...this._ancestor,
      },
      attributes: [ 'app_uuid', 'app_name', 'app_symbol', 'url', 'icon', 'created_at', 'sort_by' ],
      order: [
        [ 'sort_by', 'DESC' ],
      ],
      raw: true,
    })

    return apps
  }

  /**
   * @description 通过app_uuid 查询应用信息, app_uuid 不传入， 返回null
   * @version 0.1
   * @param {string} app_uuid app_uuid
   * @return {(null | object)} 返回null 或者 应用信息
   */
  async findOneByUUid(app_uuid) {
    if (!app_uuid) {
      return null
    }

    return await this.ctx.model.Apps.findOne({
      where: {
        disabled: 1,
        app_uuid,
        ...this._ancestor,
      },
      attributes: [ 'app_uuid', 'app_name', 'app_symbol', 'url', 'icon', 'created_at', 'app_id', 'version', 'sort_by' ],
    })
  }

  /**
   * @description 通过app_symbol查询app_uuid
   * @param {string} app_symbol app标识
   * @return {null|object} app_uuid or null
   */
  async findAppUUidBySymbol(app_symbol) {
    if (!app_symbol) {
      return null
    }

    const app = await this.ctx.model.Apps.findOne({
      where: {
        disabled: 1,
        app_symbol,
      },
      attributes: [ 'app_uuid' ],
    })

    return app.app_uuid || null
  }

  /**
   * @description 创建应用
   * @version 0.1
   * @param {object} data 要保存的数据
   * @return {object} 已保存的应用信息
   */
  async create(data) {
    const app = this.ctx.model.Apps.build(data)
    return await app.save()
  }

}

module.exports = AppsService
