'use strict'
const Controller = require('egg').Controller

class BaseController extends Controller {
  constructor (app) {
    super(app)
    this.app = app
    this.success = this.ctx.success
  }
}

module.exports = BaseController
