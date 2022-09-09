import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { db } from '../../../database'
import { IUser } from '../../../interfaces'
import { User } from '../../../models'
import { jwt } from '../../../utils'

type Data =
  | {
      message: string
    }
  | { user: IUser }
  | {
      token: string
      user: { name: string }
    }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return loginUser(req, res)

    default:
      return res.status(200).json({ message: 'Example' })
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = '', password = '' } = req.body

  db.connect()
  const user = await User.findOne({ email })
  db.disconnect()

  if (!user) {
    return res.status(400).json({ message: 'Email no encontrado' })
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Contraseña incorrecta' })
  }

  // TODO: Próximamente agregar roles de usuario
  const token = jwt.signToken({ name: user.name })

  const { name } = user

  return res.status(200).json({ token, user: { name } })
}
