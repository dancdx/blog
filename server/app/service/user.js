const Service = require('egg').Service
const ms = require('ms')

class UserService extends Service {
  // async find (uid) {
  //   const user = await this.ctx.db.query('select * from user where uid = ?', uid)
  //   return user
  // }
  async register (params) {
    const { username, password } = params
    const user = await this.ctx.model.User.findOne({ username })
    if (user) {
      this.ctx.fail('用户名已存在')
      return null
    } else {
      const data = await this.ctx.model.User.create({ username, password })
      return data
    }
  }
  async login (params) {
    const { username, password } = params
    let user = await this.ctx.model.User.findOne({ username })
    if (!user) {
      this.ctx.fail('用户名不存在')
    } else {
      if (password !== user.password) {
        this.ctx.fail('密码错误')
        user = null
      }
    }
    this.ctx.session.user = user
    this.ctx.session.maxAge = ms('10d')
    return user
  }
}

module.exports = UserService
