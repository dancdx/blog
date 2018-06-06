'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/user', controller.user.index)
  router.post('/user/register', controller.user.register)
  router.post('/user/login', controller.user.login)

  router.get('/category', controller.category.getCategory)
  router.post('/category/add', controller.category.addCategory)
  router.post('/category/delete', controller.category.deleteCategory)
  router.post('/category/update', controller.category.updateCategory)

  router.get('/tag', controller.tag.getTag)
  router.post('/tag/add', controller.tag.addTag)
  router.post('/tag/delete', controller.tag.deleteTag)
  router.post('/tag/update', controller.tag.updateTag)

  router.get('/article', controller.article.getArticle)
  router.post('/article/add', controller.article.addArticle)
  router.get('/article/detail', controller.article.detailArticle)
}
