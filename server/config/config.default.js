'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527127394812_1038'

  // add your config here
  config.middleware = []

  config.security = {
    csrf: false
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/blog',
    options: {}
  }

  config.onerror = {
    all (err, ctx) {
      console.log(err.message)
      ctx.body = { code: -1, msg: err.message }
      // ctx.status = 500
    },
    html (err, ctx) {
      ctx.body = `<h3>${err.message || 'error'}</h3>`
      // ctx.status = 500
    }
  }

  return config
}
