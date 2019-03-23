'use strict'

function jsonDecode(jsonString, _default = Object.create(null)) {
  try {
    return JSON.parse(jsonString)
  } catch (e) {
    return _default || {}
  }
}

function jsonEncode(json, _default = '{}') {
  try {
    return JSON.stringify(json)
  } catch (e) {
    return _default || '{}'
  }
}

module.exports = {
  jsonDecode,
  jsonEncode,
}