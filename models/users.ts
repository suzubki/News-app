import mongoose, { model, Model, Schema } from 'mongoose'
import { IUser } from '../interfaces'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const User: Model<IUser> =
  mongoose.models.User || model('User', userSchema)
