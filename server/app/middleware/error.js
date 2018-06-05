module.exports = options => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      let msg = e.message
      if (e.errors) msg = JSON.stringify(e.errors)
      ctx.body = {
        code: -1,
        data: null,
        msg
      }
    }
  }
}