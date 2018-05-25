'use strict'

const BaseController = require('./base')

const userRule = {
  username: 'string',
  password: 'string'
}

class UserController extends BaseController {
  async index () {
    this.ctx.success({ name: 'test' })
  }
  async register () {
    const params = this.ctx.request.body
    this.ctx.validate(userRule)
    const userInfo = await this.service.user.register(params)
    this.ctx.success(userInfo)
  }
  async login () {
    const params = this.ctx.request.body
    const userInfo = await this.service.user.login(params)
    this.ctx.success(userInfo)
  }
}

module.exports = UserController
