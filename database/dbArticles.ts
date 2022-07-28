import { IDocument } from '../interfaces'
import { Article } from '../models'
import { db } from './'

export const getAllArticles = async (): Promise<IDocument[]> => {
  db.connect()
  const articles = await Article.find().select('slug -_id').lean()
  db.disconnect()

  return JSON.parse(JSON.stringify(articles))
}

export const getArticleBySlug = async (
  slug: string
): Promise<IDocument | null> => {
  db.connect()
  const article = await Article.findOne({ slug }).lean()
  db.disconnect()

  if (!article) return null

  return JSON.parse(JSON.stringify(article))
}
