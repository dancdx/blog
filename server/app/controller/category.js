'use strict'

const BaseController = require('./base')

const categoryRule = {
  name: 'string'
}
const updateRule = {
  name: 'string',
  id: 'string'
}

class CategoryController extends BaseController {
  async getCategory () {
    const categoryInfo = await this.service.category.getCategory()
    if (categoryInfo) this.ctx.success(categoryInfo)
  }
  async addCategory () {
    const params = this.ctx.request.body
    this.ctx.validate(categoryRule)
    const categoryInfo = await this.service.category.addCategory(params)
    if (categoryInfo) this.ctx.success(categoryInfo)
  }
  async deleteCategory () {
    const params = this.ctx.request.body
    this.ctx.validate(categoryRule)
    const categoryInfo = await this.service.category.deleteCategory(params)
    if (categoryInfo) this.ctx.success(categoryInfo)
  }
  async updateCategory () {
    const params = this.ctx.request.body
    this.ctx.validate(updateRule)
    const categoryInfo = await this.service.category.updateCategory(params)
    if (categoryInfo) this.ctx.success(categoryInfo)
  }
}

module.exports = CategoryController
