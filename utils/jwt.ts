import jwt from 'jsonwebtoken'

export const signToken = ({ name }: { name: string }) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error('No hay existe clave secreta de JWT')
  }

  return jwt.sign({ name }, process.env.JWT_SECRET_KEY!, {
    expiresIn: '4h',
  })
}
