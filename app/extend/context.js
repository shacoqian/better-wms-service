'use strict'

module.exports = {
  success(data = {}, msg = '请求成功') {
    return this.json(data).setCode(1).setMsg(msg)
      .end();
  },
  fail(msg = '请求失败', data = '') {
    return this.json(data).setCode(0).setMsg(msg)
      .end();
  },
  end() {
    if (!Buffer.isBuffer(this.body)) {
      this.setBody({
        code: this._code,
        data: this.body,
        msg: this._msg,
      })
    }
    return this.body
  },
  setBody(body) {
    this.body = body

    return this
  },
  json(body) {
    this.setContentType('application/json')
    this.setBody(body || '')

    return this
  },
  setHeader(field, value) {
    this.response.set(field, value)

    return this
  },
  setBody(body) {
    this.body = body

    return this
  },
  setStatus(status) {
    this.status = status

    return this
  },
  setCode(code = 0) {
    this._code = code

    return this
  },
  setContentType(contentType) {
    this.setHeader('Content-type', `${contentType}; charset=utf-8`)

    return this
  },
  setMsg(msg) {
    this._msg = msg

    return this
  },
}