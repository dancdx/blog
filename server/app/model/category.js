module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const CategorySchema = new Schema({
    name: { type: String }
  })

  return mongoose.model('Category', CategorySchema)
}