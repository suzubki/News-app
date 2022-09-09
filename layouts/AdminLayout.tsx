import { useContext, FC, ReactNode } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  Typography,
  ListSubheader,
  ListItem,
  ThemeProvider,
} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

import { adminTheme } from '../themes'
import { UIAdminProvider } from '../context'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../context/auth'

interface Props {
  children: ReactNode
}

const drawerWidth = 210

export const AdminLayout: FC<Props> = ({ children }) => {
  const { logoutUser } = useContext(AuthContext)
  const router = useRouter()

  const handleLogout = () => {
    logoutUser()
    router.push('/auth/login')
  }

  return (
    <ThemeProvider theme={adminTheme}>
      <UIAdminProvider>
        <main>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
              component='nav'
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
              <Drawer variant='permanent' anchor='left'>
                {/* LOGO */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h2'>LOGO</Typography>
                </Box>
                <List sx={{ paddingLeft: 2, paddingRight: 2 }}>
                  {/* Inicio */}
                  <Box sx={{ marginY: 1.5 }}>
                    <NextLink href='/admin' passHref>
                      <a>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              borderRadius: 3,
                              '&:hover': {
                                backgroundColor: '#C6BEEE',
                                color: '#5E35B1',
                                '.MuiSvgIcon-root': {
                                  color: '#5E35B1',
                                },
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '36px' }}>
                              <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Inicio' />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    </NextLink>
                  </Box>

                  <Divider />

                  {/* Usuarios */}
                  <Box sx={{ marginY: 1.5 }}>
                    <Typography variant='caption'>
                      Editores
                      <ListSubheader sx={{ lineHeight: 1, paddingLeft: 0 }}>
                        Administrar
                      </ListSubheader>
                    </Typography>
                    <NextLink href='/admin/usuarios' passHref>
                      <a>
                        <ListItem disablePadding sx={{ marginTop: 1 }}>
                          <ListItemButton
                            sx={{
                              borderRadius: 3,
                              '&:hover': {
                                backgroundColor: '#C6BEEE',
                                color: '#5E35B1',
                                '.MuiSvgIcon-root': {
                                  color: '#5E35B1',
                                },
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '36px' }}>
                              <PersonOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Usuarios' />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    </NextLink>
                    <NextLink href='/admin/usuarios/crear' passHref>
                      <a>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              borderRadius: 3,
                              '&:hover': {
                                backgroundColor: '#C6BEEE',
                                color: '#5E35B1',
                                '.MuiSvgIcon-root': {
                                  color: '#5E35B1',
                                },
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '36px' }}>
                              <PersonAddAlt1OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Agregar usuario' />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    </NextLink>
                  </Box>

                  <Divider />

                  {/* Artículos */}
                  <Box sx={{ marginY: 1.5 }}>
                    <Typography variant='caption'>Páginas</Typography>
                    <NextLink href='/admin/articulos' passHref>
                      <a>
                        <ListItem disablePadding sx={{ marginTop: 1 }}>
                          <ListItemButton
                            sx={{
                              borderRadius: 3,
                              '&:hover': {
                                backgroundColor: '#C6BEEE',
                                color: '#5E35B1',
                                '.MuiSvgIcon-root': {
                                  color: '#5E35B1',
                                },
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '36px' }}>
                              <ArticleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Artículos' />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    </NextLink>

                    <NextLink href='/admin/articulos/crear' passHref>
                      <a>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              borderRadius: 3,
                              '&:hover': {
                                backgroundColor: '#C6BEEE',
                                color: '#5E35B1',
                                '.MuiSvgIcon-root': {
                                  color: '#5E35B1',
                                },
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '36px' }}>
                              <PostAddIcon />
                            </ListItemIcon>
                            <ListItemText primary='Crear artículo' />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    </NextLink>
                  </Box>

                  <Divider />

                  {/* Salir */}
                  <Box sx={{ marginTop: 1.5 }}>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          borderRadius: 3,
                          '&:hover': {
                            backgroundColor: '#C6BEEE',
                            color: '#5E35B1',
                            '.MuiSvgIcon-root': {
                              color: '#5E35B1',
                            },
                          },
                        }}
                        onClick={handleLogout}
                      >
                        <ListItemIcon sx={{ minWidth: '36px' }}>
                          <ExitToAppOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Salir' />
                      </ListItemButton>
                    </ListItem>
                  </Box>
                </List>
              </Drawer>
            </Box>
            <Box
              component='main'
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                position: 'relative',
                left: `calc(100% - ${drawerWidth})`,
              }}
            >
              {children}
            </Box>
          </Box>
        </main>
        <ToastContainer
          autoClose={5000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          closeOnClick
        />
      </UIAdminProvider>
    </ThemeProvider>
  )
}
