import { useState, SyntheticEvent } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Grid,
  Modal,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AdminLayout } from '../../../layouts'
import { newsAPI } from '../../../api'
import { IDocument } from '../../../interfaces'

const MyEditor = dynamic(() => import('../../../components/customs/MyEditor'), {
  ssr: false,
  loading: () => <p>Cargando...</p>,
})

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CreateArticlePage = () => {
  const router = useRouter()
  const [expanded, setExpanded] = useState<string | false>(false)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [editorValue, onEditorValueChange] = useState<string>(``)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const handleCreateArticle = () => {
    if (editorValue === '<p><br></p>' || title === '') {
      return toast.error('Asegúrate haber llenado los campos obligatorios!', {
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

    handleOpen()
  }

  const handleSubmitArticle = async () => {
    // TODO: Autor y categoría
    const newArticle: IDocument = {
      slug: title.toLowerCase().replace(/ /g, '-'),
      author: 'Darwin Narro',
      category: 'Doxa',
      title,
      summary,
      description: editorValue,
    }
    const { data } = await newsAPI.post('/admin/articles', newArticle)
    console.log(data)
    router.push('/admin/articulos')
  }

  return (
    <AdminLayout>
      <Box sx={{ height: 'auto', width: '100%' }}>
        <Grid container display='flex' spacing={4}>
          <Grid item xs={6} display='flex' alignContent='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={handleCreateArticle}
            >
              Crear artículo
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Indicaciones
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Sobre la barra de acción(Toolbar)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display='flex' flexDirection='column' gap={2}>
                  {/* <Box>
                    <Typography variant='subtitle2'>
                      Encabezados: H1, H2, H3, H4, H5, H6
                    </Typography>
                    <Typography sx={{ paddingLeft: 2 }}>
                      H1 representa el título principal del artículo y recuerda
                      siempre ponerlo centrado. El resto de headings(h2, h3, h4,
                      h5) son subtítulos.
                    </Typography>
                  </Box> */}
                  <Box>
                    <Typography variant='subtitle2'>Imagen</Typography>
                    <Typography sx={{ paddingLeft: 2 }}>
                      Si quieres poner una imagen, recuerda que la imagen debe
                      estar en buenas dimensiones, de lo contrario se verá
                      pixelada.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='subtitle2'>Sumilla</Typography>
                    <Typography sx={{ paddingLeft: 2 }}>
                      Si quieres agregar una sumilla utiliza el campo de sumilla
                      y no lo pongas implícitamente en el editor de texto.
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Box
              display='flex'
              flexDirection='column'
              component='form'
              autoComplete='off'
              gap={2}
            >
              <TextField
                label='Título'
                variant='outlined'
                inputProps={{ style: { color: '#000', fontWeight: 400 } }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <TextField
                label='Sumilla'
                variant='outlined'
                inputProps={{ style: { color: '#000', fontWeight: 400 } }}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ fontWeight: 400 }}>
            <Box paddingX={8}>
              {/* WYSIWYG */}
              <MyEditor value={editorValue} onChange={onEditorValueChange} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h5' align='center'>
            {title}
          </Typography>
          {summary && (
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Sumilla: {summary}
            </Typography>
          )}
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            Descripción: {editorValue}
          </Typography>
          <Box display='flex' justifyContent='end' sx={{ mt: 4, gap: 2 }}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmitArticle}
            >
              Aceptar
            </Button>
            <Button variant='contained' color='error' onClick={handleClose}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </AdminLayout>
  )
}

export default CreateArticlePage
