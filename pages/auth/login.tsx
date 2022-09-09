import { useRouter } from 'next/router'
import { useState, useContext, FC, ChangeEvent, KeyboardEvent } from 'react'

import { Box, Button, TextField, Alert } from '@mui/material'

import { AuthContext } from '../../context'

interface ErrorCredentialsProps {
  message: string
  state: boolean
}
interface DataFormProps {
  email: string
  password: string
}

const INITIAL_STATE_DATAFORM: DataFormProps = {
  email: '',
  password: '',
}
const INITIAL_STATE_ERROR_CREDENTIALS: ErrorCredentialsProps = {
  message: '',
  state: false,
}

const Login: FC = () => {
  const router = useRouter()
  const { loginUser } = useContext(AuthContext)
  const [disabledButton, setDisabledButton] = useState<boolean>(false)
  const [errorCredentials, setErrorCredentials] =
    useState<ErrorCredentialsProps>(INITIAL_STATE_ERROR_CREDENTIALS)
  const [{ email, password }, setDataForm] = useState<DataFormProps>(
    INITIAL_STATE_DATAFORM
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }))
  }

  const handleEnterKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  const handleLogin = async () => {
    setDisabledButton(true)

    if (!email || !password) {
      setErrorCredentials({
        state: true,
        message: 'Asegúrate de haber rellenado todo los campos',
      })
      setDisabledButton(false)
      return
    }

    const isValidLogin = await loginUser(email, password)
    if (!isValidLogin) {
      setErrorCredentials({
        state: true,
        message: 'Email o contraseña incorrecto',
      })
      setDisabledButton(false)
      setDataForm((form) => ({
        ...form,
        password: '',
      }))
      return
    }

    router.push('/admin')
  }

  return (
    <Box
      height='100vh'
      width='100vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        width={400}
        paddingX={4}
        paddingY={6}
        sx={{
          borderRadius: 4,
          boxShadow: '0px 0px 36px -6px rgba(0,0,0,0.75)',
        }}
      >
        <form onKeyDown={handleEnterKey}>
          <Box display='flex' flexDirection='column' gap={2}>
            {errorCredentials.state && (
              <Alert severity='error' color='error' sx={{ color: 'red' }}>
                {errorCredentials.message}
              </Alert>
            )}
            <TextField
              label='Correo'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <TextField
              label='Contraseña'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <Button
              variant='contained'
              onClick={() => handleLogin()}
              disabled={disabledButton}
            >
              Ingresar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login
