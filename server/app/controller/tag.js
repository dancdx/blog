'use strict'

const BaseController = require('./base')

const tagRule = {
  name: 'string'
}

class TagController extends BaseController {
  async addTag () {
    const params = this.ctx.request.body
    this.ctx.validate(tagRule)
    const tagInfo = await this.service.tag.addTag(params)
    if (tagInfo) this.ctx.success(tagInfo)
  }
  
}

module.exports = TagController
