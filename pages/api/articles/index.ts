import type { NextApiRequest, NextApiResponse } from 'next'
// import { db } from '../../../database'
// import { Article } from '../../../models'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getDocumentBySlug(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}

const getDocumentBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {}
