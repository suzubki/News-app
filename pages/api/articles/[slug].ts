import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'

import { IDocument } from '../../../interfaces'
import { Article } from '../../../models'

type Data = { message: string } | IDocument

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getArticleBySlug(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}

const getArticleBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const slug = req.query

  await db.connect()
  const article = await Article.findOne({ slug }).lean()
  await db.disconnect()

  if (!article) {
    return res.status(404).json({ message: 'Artículo no encontrado' })
  }

  return res.status(200).json(article)
}
