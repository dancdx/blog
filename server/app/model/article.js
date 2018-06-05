module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ArticleSchema = new Schema({
    title: { type: String, unique: true },
    content: { type: String },
    tag: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    desc: { type: String }
  }, { timestamps: true })

  return mongoose.model('Article', ArticleSchema)
}
