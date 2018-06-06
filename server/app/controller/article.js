'use strict'

const BaseController = require('./base')

const ArticleRule = {
  title: 'string',
  content: 'string',
  tag: 'array',
  category: 'string'
}
const DetailRule = {
  id: 'string'
}

class ArticleController extends BaseController {
  async getArticle () {
    const params = this.ctx.query
    const { pageSize = 3, pageIndex = 0 } = params
    const ArticleInfo = await this.service.article.getArticle({pageSize, pageIndex, ...params})
    if (ArticleInfo) this.ctx.success(ArticleInfo)
  }
  async addArticle () {
    const params = this.ctx.request.body
    this.ctx.validate(ArticleRule)
    const articleInfo = await this.service.article.addArticle(params)
    if (articleInfo) this.ctx.success(articleInfo)
  }
  async detailArticle () {
    const params = this.ctx.query
    this.ctx.validate(DetailRule, params)
    const articleInfo = await this.service.article.detailArticle(params)
    if (articleInfo) this.ctx.success(articleInfo)
  }
  async deleteArticle () {
    const params = this.ctx.request.body
    this.ctx.validate(ArticleRule)
    const articleInfo = await this.service.article.deleteArticle(params)
    if (articleInfo) this.ctx.success(articleInfo)
  }
  async updateArticle () {
    const params = this.ctx.request.body
    // this.ctx.validate(updateRule)
    const articleInfo = await this.service.article.updateArticle(params)
    if (articleInfo) this.ctx.success(articleInfo)
  }
}

module.exports = ArticleController
