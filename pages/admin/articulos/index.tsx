import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { Box, Button, Grid } from '@mui/material'

import { AdminLayout } from '../../../layouts'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: '¿Qué pasó con las Administradoras de Fondo de Pensiones durante la pandemia?',
    col2: 'María Fernanda Dextre Visalot',
    col3: 'Economía',
    col4: '12/12/2021',
  },
  {
    id: 2,
    col1: 'Capitalismo contra capitalism un disputa por la geopolítica mundial',
    col2: 'Martín Bocanegra',
    col3: 'Economía',
    col4: '12/12/2021',
  },
  {
    id: 3,
    col1: 'El amor es hijo de la libertad',
    col2: 'Alejandro Peña',
    col3: 'Sociología',
    col4: '12/12/2021',
  },
  {
    id: 4,
    col1: 'Sobre la sexualidad y otras lindezas',
    col2: 'Jhon Alessandro Rivera Puma',
    col3: 'Filosofía',
    col4: '12/12/2021',
  },
  {
    id: 5,
    col1: 'La libertad sobreviviendo a través de la literatura',
    col2: 'José Leonardo Sotomayor',
    col3: 'Derecho',
    col4: '12/12/2021',
  },
  {
    id: 6,
    col1: '¡Es momento de despertar!',
    col2: 'Mailin Mantilla',
    col3: 'Doxa',
    col4: '12/12/2021',
  },
]

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Artículo', flex: 3 },
  { field: 'col2', headerName: 'Publicado por', flex: 1 },
  { field: 'col3', headerName: 'Categoría', flex: 1 },
  { field: 'col4', headerName: 'Fecha de publicación', flex: 1 },
  {
    field: 'col5',
    headerName: 'Acciones',
    flex: 2,
    renderCell: () => (
      <Box display='flex' gap={2}>
        <Button variant='contained' color='primary'>
          Ver
        </Button>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#FFC900',
            '&:hover': { backgroundColor: '#DFB000' },
          }}
        >
          Editar
        </Button>
        <Button variant='contained' color='error'>
          Eliminar
        </Button>
      </Box>
    ),
  },
]

const UserPage = () => {
  return (
    <AdminLayout>
      <Box sx={{ height: 'auto', width: '100%' }}>
        <Grid container>
          <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              rowsPerPageOptions={[10]}
              pageSize={10}
              hideFooterSelectedRowCount
            />
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  )
}

export default UserPage
