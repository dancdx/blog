'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527127394812_1038'

  // add your config here
  config.middleware = ['error']

  config.security = {
    csrf: false
  }

  config.cors = {
    origin: 'http://172.16.30.209:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/blog',
    options: {}
  }

  // ctx.body只能返回字符串
  // config.onerror = {
  //   all (err, ctx) {
  //     // ctx.body = `${err.errors}`
  //     ctx.body = JSON.stringify(err.errors || err)
  //     ctx.status = 500
  //   },
  //   html (err, ctx) {
  //     ctx.body = `<h3>${err.message || 'error'}</h3>`
  //     ctx.status = 500
  //   }
  // }

  return config
}
