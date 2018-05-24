module.exorts = {
  success (data = null) {
    this.ctx.body = {
      code: 0,
      data
    }
  }
}
