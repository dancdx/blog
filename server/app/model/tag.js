module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const TagSchema = new Schema({
    name: { type: String }
  })

  return mongoose.model('Tag', TagSchema)
}