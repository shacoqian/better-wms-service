'use strict'

module.exports = app => {
  const {
    STRING,
    BIGINT,
    CHAR,
    TINYINT,
    INTEGER,
  } = app.Sequelize;

  const apps = app.model.define('apps', {
    app_id: {
      type: BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
    },
    app_uuid: {
      type: CHAR(36),
      unique: true,
    },
    app_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    app_symbol: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    app_key: {
      type: STRING(32),
    },
    url: {
      type: STRING(255),
      validate: {
        isUrl: true,
        notEmpty: true,
      },
    },
    icon: {
      type: STRING(255),
      validate: {
        isUrl: true,
        notEmpty: true,
      },
    },
    creator: {
      type: BIGINT(20),
      defaultValue: 0,
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
    sort_by: {
      type: INTEGER(11),
      defaultValue: 1,
    },
  }, {
    freezeTableName: true,
    version: true,
  });

  return apps
}
