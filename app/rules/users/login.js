'use strict';

const rule = {
  email: { type: 'email', required: true, },
  password: { type: 'string', format: /^[\w_-]{6,16}$/, required: true  },
}

module.exports = rule