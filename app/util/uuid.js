const {
  shuffle,
} = require('./array')

const v1 = require('uuid/v1'),
  v3 = require('uuid/v3'),
  v4 = require('uuid/v4'),
  v5 = require('uuid/v5');

function vv0(format = 'xxxxyyxx-xxxx-xxxx-yxxx-yyxxxxxx') {
  if (!format) {
    return null
  }

  return format.replace(/[xy]/g, function(c) {
    /* eslint-disable*/
    const r = Math.random() * 16 | 0;
    /* eslint-disable*/
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  })
}

function vv1() {
  return v1()
}

function vv3(namespace = 'v3') {
  return v3(namespace, v3.DNS)
}

function vv4() {
  return v4()
}

function vv5(namespace = 'v5') {
  return v5(namespace, v5.URL)
}

/**
 * @version 1.0
 * @param {string} str  - 字符串
 * @return {string} 数字字符串
 * @description 字符串替换为数字
 */
function tonumber(str = '') {
  if (!str) { return '' }

  const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  shuffle(numbers)

  return str.replace(/[a-z]/g, function() {
    return numbers[Math.floor(Math.random() * numbers.length)]
  })
}


module.exports = {
  vv0,
  vv1,
  vv3,
  vv4,
  vv5,
  tonumber,
}