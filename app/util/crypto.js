'use strict'

const crypto = require('crypto'),
  cryptoJs = require('crypto-js');

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

function sha1(str) {
  return crypto.createHash('sha1').update(str).digest('hex')
}

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex')
}

const aesKey = 'canyou2019'

function aesEncrypt(oriStr, key = aesKey) {
  return cryptoJs.AES.encrypt(oriStr, key).toString()
}

function aesDecrypt(ciphertext, key = aesKey) {
  return cryptoJs.AES.decrypt(ciphertext, key).toString(cryptoJs.enc.Utf8)
}

function base64Encrypt(string) {
  string = '' + string
  return new Buffer.from(string).toString('base64')
}

function base64Decrypt(string) {
  return new Buffer.from(string, 'base64').toString()
}

module.exports = {
  md5,
  sha1,
  sha256,
  aesEncrypt,
  aesDecrypt,
  base64Encrypt,
  base64Decrypt,
}