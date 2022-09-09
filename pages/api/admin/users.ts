import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { User } from '../../../models'
import { db } from '../../../database'

export default function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    // TODO: Message for method GET
    case 'GET':
      return res.status(200).json({ message: 'Probando método GET' })

    case 'POST':
      return createUser(req, res)

    default:
      return res.status(405).json({ message: 'Método no permitido' })
  }
}

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body

  db.connect()
  await User.create({ ...data, password: bcrypt.hashSync(data.password) })
  db.disconnect()

  return res.status(201).json({ message: 'Usuario creado con éxito' })
}
