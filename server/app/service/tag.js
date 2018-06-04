const Service = require('egg').Service
// const ms = require('ms')

class TagService extends Service {
  async addTag (params) {
    const { name } = params
    const tag = await this.ctx.model.Tag.findOne({ name })
    if (tag) {
      this.ctx.fail('该分类已存在')
      return null
    } else {
      const data = await this.ctx.model.Tag.create({ name })
      return data
    }
  }
}

module.exports = TagService
