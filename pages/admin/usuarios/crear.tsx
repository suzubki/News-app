import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { toast } from 'react-toastify'

import { AdminLayout } from '../../../layouts'
import { newsAPI } from '../../../api'
import { validateEmail } from '../../../utils'

interface DataFormProps {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const INITIAL_DATA_FORM: DataFormProps = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

const CreateUserPage = () => {
  // const [file, setFile] = useState<any>(null)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [dissabledButton, setDissabledButton] = useState(false)

  // const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) return alert('Introduzca una imagen correcta')
  //   if (e.target.files.length === 0) return

  //   setFile(e.target.files[0])
  // }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [{ name, email, password, passwordConfirmation }, setDataForm] =
    useState<DataFormProps>(INITIAL_DATA_FORM)

  const handleChangeDataForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCreateUser = async () => {
    if (password !== passwordConfirmation) {
      return toast.error('Las contraseñas no son iguales!', {
        position: 'bottom-right',
        style: { color: 'red' },
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    if (!name || !password || !passwordConfirmation) {
      return toast.error('Asegúrate de haber rellenado todos los campos!', {
        position: 'bottom-right',
        style: { color: 'red' },
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    if (!validateEmail(email)) {
      return toast.error('Asegúrate de haber colocado un email correcto!', {
        position: 'bottom-right',
        style: { color: 'red' },
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    setDissabledButton(true)
    const data = await newsAPI.post('/admin/users', { name, email, password })

    if (data) {
      router.push('/admin/usuarios')
    } else {
      alert('Error al crear el usuario, intente nuevamente')
    }
  }

  return (
    <AdminLayout>
      <Grid container display='flex' gap={3}>
        <Grid item xs={12}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            Crear Usuario
          </Typography>
        </Grid>
        <Grid container display='flex' gap={2}>
          <Grid item xs={4} display='flex' flexDirection='column' gap={2}>
            <Box display='flex' flexDirection='column' gap={1}>
              <InputLabel htmlFor='input-name' required>
                Nombre completo
              </InputLabel>
              <TextField
                id='input-name'
                placeholder='Juan Perez'
                name='name'
                value={name}
                onChange={handleChangeDataForm}
                fullWidth
                autoComplete='new-name'
              />
              <Typography variant='body2' sx={{ fontSize: 10 }}>
                Este nombre será mostrado en la plataforma
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <InputLabel htmlFor='input-email' required>
                Correo electrónico
              </InputLabel>
              <TextField
                id='input-email'
                placeholder='email@gmail.com'
                type='email'
                name='email'
                value={email}
                onChange={handleChangeDataForm}
                autoComplete='new-email'
              />
              <Typography variant='body2' sx={{ fontSize: 10 }}>
                El email servirá por si alguien desea contactarlo
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <InputLabel htmlFor='input-password' required>
                Contraseña
              </InputLabel>
              <TextField
                id='input-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      onClick={handleShowPassword}
                      sx={{ cursor: 'pointer' }}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
                value={password}
                name='password'
                onChange={handleChangeDataForm}
                autoComplete='new-password'
              />
              <Typography variant='body2' sx={{ fontSize: 10 }}>
                La contraseña puede ser cambiada en cualquier momento
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <InputLabel htmlFor='input-confirm-password' required>
                Confirmar contraseña
              </InputLabel>
              <TextField
                id='input-confirm-password'
                type={showPassword ? 'text' : 'password'}
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={handleChangeDataForm}
                autoComplete='new-passwordConfirmed'
              />
            </Box>
          </Grid>
          <Grid item xs={8} marginTop={2}>
            <Box width='30%'>
              <Button
                variant='contained'
                onClick={handleCreateUser}
                fullWidth
                disabled={dissabledButton}
              >
                Crear
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}

export default CreateUserPage
