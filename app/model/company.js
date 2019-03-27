'use strict'

module.exports = app => {
  const {
    STRING,
    BIGINT,
    CHAR,
    TINYINT
  } = app.Sequelize

  const Company = app.model.define('company', {
    company_id: {
      type: BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
    },
    company_name: {
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
      type: CHAR(36),
    },
    creator_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
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
    contact_number: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    contact_name: {
      type: STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    auth_org_id: {
      type: BIGINT(20),
      validate: {
        notEmpty: true,
      },
    },
  }, {
    freezeTableName: true,
    version: true,
  })

  return Company
}
