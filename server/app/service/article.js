const Service = require('egg').Service
// const ms = require('ms')

class ArticleService extends Service {
  async getArticle (params) {
    const { pageSize, pageIndex } = params
    const count = await this.ctx.model.Article.count()
    const article = await this.ctx.model.Article.find().skip(pageIndex * pageSize).limit(pageSize)
    return { count, ...article }
  }
  async addArticle (params) {
    const { title, content, tag, category } = params
    const desc = content.slice(0, 50)
    const data = await this.ctx.model.Article.create({ title, content, tag, category, desc })
    return data
  }
  async detailArticle (params) {
    const { id } = params
    const article = await this.ctx.model.Article.findById(id)
    if (article) {
      return article
    }
  }
  async deleteArticle (params) {
    const { name } = params
    const article = await this.ctx.model.Article.findOne({ name })
    if (article) {
      article.remove()
      return 'success'
    } else {
      this.ctx.fail('该标签不存在')
      return null
    }
  }
  async updateArticle (params) {
    const { name, id } = params
    const article = await this.ctx.model.Article.findOneAndUpdate({ _id: id }, { name }, { new: true })
    if (article) {
      return { name, id }
    }
  }
}

module.exports = ArticleService
