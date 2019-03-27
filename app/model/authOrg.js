'use strict'

module.exports = app => {
  const {
    STRING,
    BIGINT,
    TINYINT
  } = app.Sequelize

  const authOrg = app.model.define('auth_orgs', {
    org_id: {
      type: BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
    },
    org_name: {
      type: STRING(50),
      unique: true,
    },
    org_type: {
      type: STRING(10),
      validate: {
        notEmpty: true,
      },
    },
    org_type_id: {
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
    
  }, {
    freezeTableName: true,
    version: true,
  })

  return authOrg
}
