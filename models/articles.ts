import mongoose, { Model, model, Schema } from 'mongoose'
import { IDocument } from '../interfaces'

// TODO: Timestamps
const articleSchema = new Schema(
  {
    slug: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },

    subtitle: { type: String },
    bibliography: [{ type: String }],
    references: [{ type: String }],
    possible_main_content: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

export const Article: Model<IDocument> =
  mongoose.models.Article || model('Article', articleSchema)
