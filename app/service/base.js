'use strict'

class BaseService extends require('egg').Service {
  get user() {
    return this.ctx.user || {}
  }

  get userId() {
    return this.user.user_id || 0
  }

  get userName() {
    return this.user.user_name
  }

  get phoneNumber() {
    return this.user.phone_number
  }

  get parentId() {
    return this.user.parent_id
  }

  get roles() {
    return this.user.roles
  }

  /**
   * @description 当前登录者是否为超级管理员（parentId=0-）
   */
  get isAdmin() {
    return this.ctx.helper.calcParentIdLength(this.parentId) === 1
  }

  /**
   * @description 当前登录者是否为管理员（parentId=0-x-x...)
   */
  get isCommonUser() {
    return this.ctx.helper.calcParentIdLength(this.parentId) > 1
  }

  get ancestor() {
    return this.user.ancestor
  }

  get _ancestor() {
    const {
      Sequelize,
    } = this.ctx.model

    // 可能没有登录
    if (!this.ancestor) {
      return {

      }
    }

    return {
      ancestor: {
        [Sequelize.Op.like]: `${this.ancestor}%`,
      },
    }
  }
}

module.exports = BaseService
