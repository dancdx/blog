const Service = require('egg').Service

class UserService extends Service {
  // async find (uid) {
  //   const user = await this.ctx.db.query('select * from user where uid = ?', uid)
  //   return user
  // }
  async register (params) {
    const { username, password } = params
    // console.log(this.ctx.model.User)
    const data = await this.ctx.model.User.create({ username, password })
    return data
  }
  async login (params) {
    const { username, password } = params
    const user = await this.ctx.model.User.findOne({ username })
    console.log(params)
    console.log(password)
    console.log(user)
    if (!user) {
      this.ctx.throw(200, '用户名不存在')
    }
    try {
      if (password !== user.data.password) {
        this.ctx.throw(200, '密码错误1')
      }
    } catch (e) {
      this.ctx.throw(200, e)
    }
    return user
  }
}

module.exports = UserService
