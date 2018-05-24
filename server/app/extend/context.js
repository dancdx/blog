module.exports = {
  success (data) {
    this.body = { code: 0, data }
  },
  fail (data, code = -1) {
    this.body = { code, data }
  }
}
