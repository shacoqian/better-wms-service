'use strict';

module.exports = app => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1522923930765_6677';

  // add your config here
  // config.middleware = [ 'authUser' ]

  config.security = {
    csrf: {
      enable: false,
    },
  }

  if (process.env.EGG_SERVER_ENV === 'local') {
    config.security.domainWhiteList = [ 'http://localhost:9527' ]
  }

  config.bodyParser = {
    jsonLimit: '10mb',
  }

  config.cookies = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookie过期时间
  }

  // redis
  config.redis = {
    client: {
      port: 6380,
      host: '127.0.0.1',
      password: '123456',
      db: 0,
    },
  }

  exports.sequelize = {
    dialect: 'mysql',
    database: 'common_auth',
    host: '127.0.0.1',
    port: 3307,
    username: 'root',
    password: '123456',
    delegate: 'model',
    baseDir: 'model',
  }

  exports.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  }

  exports.session = {
    key: 'BETTER_WMS_SESS',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    encrypt: true,
  };

  config.onerror = {
    accepts() {
      return 'json'
    },
    json(error, ctx) {
      // sequelize 验证报错，header status=500
      // 修正为200，方便前端使用
      ctx.response.status = 200
      const msg = error instanceof Error ? error.message : '发生错误了!';
      ctx.logger.error('访问出错了:', ctx.headers, error)
      ctx.body = ctx.fail(msg)
    },
  }

  // 文件服务器
  // config.staticServer = 'http://test.static.canyousc.com/'

  // 默认密码
  // config.defaultPassword = 'abc123456789'

  return config
}
