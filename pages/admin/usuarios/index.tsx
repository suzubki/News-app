import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { Box, Button, Grid } from '@mui/material'

import { AdminLayout } from '../../../layouts'

const rows: GridRowsProp = [
  { id: 1, col1: 'Darwin Narro', col2: 10, col3: '12/01/2020' },
  { id: 2, col1: 'Alejandro Peña', col2: 15, col3: '12/01/2020' },
  { id: 3, col1: 'Bracson Antonio', col2: 5, col3: '12/01/2020' },
  { id: 4, col1: 'Juan Carlos Fernandez', col3: '12/01/2020' },
]

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Nombre', width: 400 },
  { field: 'col2', headerName: 'Publicaciones', width: 100 },
  { field: 'col3', headerName: 'Fecha de integración', width: 150 },
  {
    field: 'col4',
    headerName: 'Acciones',
    flex: 1.2,
    renderCell: () => (
      <Box display='flex' gap={2}>
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
