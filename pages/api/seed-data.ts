import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../database'
import { Article } from '../../models'

import data from '../../database/seed-data'

type Data =
  | {
      name: string
    }
  | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return seedData(req, res)
  }
}
const seedData = async (req: NextApiRequest, res: NextApiResponse) => {
  db.connect()

  Article.insertMany(data)

  db.disconnect()

  console.log('creando...')
  res.status(200).json({ name: 'Example' })
}
