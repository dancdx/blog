const Service = require('egg').Service
// const ms = require('ms')

class TagService extends Service {
  async getTag () {
    const tag = await this.ctx.model.Tag.find()
    return tag
  }
  async addTag (params) {
    const { name } = params
    const tag = await this.ctx.model.Tag.findOne({ name })
    if (tag) {
      this.ctx.fail('该标签已存在')
      return null
    } else {
      const data = await this.ctx.model.Tag.create({ name })
      return data
    }
  }
  async deleteTag (params) {
    const { name } = params
    const tag = await this.ctx.model.Tag.findOne({ name })
    if (tag) {
      tag.remove()
      return 'success'
    } else {
      this.ctx.fail('该标签不存在')
      return null
    }
  }
  async updateTag (params) {
    const { name, id } = params
    const tag = await this.ctx.model.Tag.findOneAndUpdate({ _id: id }, { name }, { new: true })
    if (tag) {
      return { name, id }
    }
  }
}

module.exports = TagService
