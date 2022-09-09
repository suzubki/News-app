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
    case 'POST':
      return createArticle(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}

const createArticle = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const article = req.body

  await db.connect()
  const newArticle = await Article.create(article)
  await db.disconnect()

  return res.status(201).json(newArticle)
}
