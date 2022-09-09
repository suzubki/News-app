import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { AdminLayout } from '../../layouts'

// TODO: Dinamizar los import
const AdminPage: FC = () => {
  return (
    <AdminLayout>
      <Box
        sx={{ height: '60vh' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h2'>En construcción...</Typography>
      </Box>
    </AdminLayout>
  )
}

export default AdminPage
