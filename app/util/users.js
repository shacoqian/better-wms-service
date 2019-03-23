'use strict'

const {
  vv0,
} = require('./uuid')

const {
  md5,
} = require('./crypto')

/**
 * @description 密码加密
 * @version 0.1
 * @param {string} password 原始密码
 * @param {string} salt 盐
 * @param {integer} saltLength 盐长度
 * @return {object} 包括盐，原始密码，加密后的密码
 */
function encryptPassword(password, salt = '', saltLength = 10) {
  // 默认8位密码
  password = password || vv0('xyxyxyxy')

  // 盐 10位
  saltLength = saltLength || 10
  salt = salt || vv0('xxxxxyyyyy')

  salt = salt.length >= saltLength ? salt.substr(0, saltLength) : salt + vv0(new Array(saltLength - salt.length).fill('x').join(''))

  return {
    salt,
    encryptPassword: md5(password + salt),
    password,
  }
}


function getUserName(length = 10) {
  return vv0('xyxyxyxy')
}

module.exports = {
  encryptPassword,
  getUserName
}
