import NextLink from 'next/link'
import {
  HomeIcon,
  MultiplePagesIcon,
  SectionAddIcon,
  SignOutIcon,
  UserAddIcon,
  UserIcon,
} from '../../../assets'
import { Button, Text } from '../../atoms'

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <div className={styles.sidebarMainContainer}>
      <div className={styles.logoContainer}>
        <Text content='LOGO' size='large' />
      </div>

      <div className={styles.firstSectionContainer}>
        <div className='mt-x1 weight-bold'>
          <NextLink href='/admin' passHref>
            <a>
              <Button text='Inicio' LeftIcon={HomeIcon} size='large' />
            </a>
          </NextLink>
        </div>
        <div className='mt-x1 weight-bold'>
          <Button
            text='Publicaciones'
            LeftIcon={MultiplePagesIcon}
            size='large'
          />
        </div>
        <div className='mt-x1 weight-bold'>
          <Button text='Secciones' LeftIcon={SectionAddIcon} size='large' />
        </div>
      </div>

      <div className={styles.secondSectionContainer}>
        <div className='mt-x1 weight-bold'>
          <Button text='Usuarios' LeftIcon={UserIcon} size='large' />
        </div>
        <div className='mt-x1 weight-bold'>
          <Button
            text='Registrar Usuario'
            LeftIcon={UserAddIcon}
            size='large'
          />
        </div>
      </div>

      <div className={styles.signOutContainer}>
        <Button text='Salir' LeftIcon={SignOutIcon} size='large' />
      </div>
    </div>
  )
}
