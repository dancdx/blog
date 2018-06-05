const Service = require('egg').Service
// const ms = require('ms')

class CategoryService extends Service {
  async getCategory () {
    const category = await this.ctx.model.Category.find()
    return category
  }
  async addCategory (params) {
    const { name } = params
    const category = await this.ctx.model.Category.findOne({ name })
    if (category) {
      this.ctx.fail('该分类已存在')
      return null
    } else {
      const data = await this.ctx.model.Category.create({ name })
      return data
    }
  }
  async deleteCategory (params) {
    const { name } = params
    const category = await this.ctx.model.Category.findOne({ name })
    if (category) {
      category.remove()
      return 'success'
    } else {
      this.ctx.fail('该分类不存在')
      return null
    }
  }
  async updateCategory (params) {
    const { name, id } = params
    const category = await this.ctx.model.Category.findOneAndUpdate({ _id: id }, { name }, { new: true })
    if (category) {
      return { name, id }
    }
  }
}

module.exports = CategoryService
