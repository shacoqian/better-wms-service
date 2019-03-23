'use strict';

// redis 存储的用户信息hash
const loginUserHash = 'login_user'
const {
  jsonEncode,
  jsonDecode,
} = require('../util/json')

module.exports = {
  async setLoginUser(userUUid, user = {}) {
    if (!userUUid) {
      return 0
    }

    return await this.redis.hset(loginUserHash, userUUid, jsonEncode(user))
  },

  async getLoginUser(userUUid) {
    if (!userUUid) {
      return null
    }

    const user = await this.redis.hget(loginUserHash, userUUid)
    if (!user) {
      return null
    }

    return jsonDecode(user)
  },

  async removeLoginUser(userUUid) {
    if (!userUUid) {
      return 0
    }

    return await this.redis.hdel(loginUserHash, userUUid)
  },
}
