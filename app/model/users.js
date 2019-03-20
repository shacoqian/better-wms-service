'use strict'

module.exports = app => {
  const {
    STRING,
    BIGINT,
    CHAR,
    TINYINT
  } = app.Sequelize

  const users = app.model.define('users', {
    user_id: {
      type: BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
    },
    user_uuid: {
      type: CHAR(36),
      unique: true,
    },
    user_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    telphone: {
      type: STRING(11),
      validate: {
        notEmpty: true,
      },
    },
    creator: {
      type: STRING(36),
    },
    creator_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    ancestor: {
      type: STRING(255),
      defaultValue: '',
    },
    version: {
      type: BIGINT(20),
      defaultValue: 1,
    },
    disabled: {
      type: TINYINT,
      defaultValue: 1,
    },
    email: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    nick_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
  }, {
    freezeTableName: true,
    version: true,
  })

  return users
}
