'use strict'

const BaseController = require('./base')

const tagRule = {
  name: 'string'
}
const updateRule = {
  name: 'string',
  id: 'string'
}

class TagController extends BaseController {
  async getTag () {
    const tagInfo = await this.service.tag.getTag()
    if (tagInfo) this.ctx.success(tagInfo)
  }
  async addTag () {
    const params = this.ctx.request.body
    this.ctx.validate(tagRule)
    const tagInfo = await this.service.tag.addTag(params)
    if (tagInfo) this.ctx.success(tagInfo)
  }
  async deleteTag () {
    const params = this.ctx.request.body
    this.ctx.validate(tagRule)
    const tagInfo = await this.service.tag.deleteTag(params)
    if (tagInfo) this.ctx.success(tagInfo)
  }
  async updateTag () {
    const params = this.ctx.request.body
    this.ctx.validate(updateRule)
    const tagInfo = await this.service.tag.updateTag(params)
    if (tagInfo) this.ctx.success(tagInfo)
  }
}

module.exports = TagController
