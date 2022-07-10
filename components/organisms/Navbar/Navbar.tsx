import { Text, Button } from '../../atoms'
import { menuHamburgerIcon, searchOutlinedIcon } from '../../../assets'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={`${styles.navbar} mt-x1 mx-2`}>
      <div className={styles.logo}>
        <Text content='LOGO' />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuContentTop}>
          <div className={styles.todaysDate}>
            <Text content='01 de Enero, 2022' />
          </div>
          <div className={styles.infoAboutUs}>
            <Text content='Contáctanos' size='small' />
            <Text content='Sobre Nosotros' />
          </div>
        </div>
        <div className={styles.menuContentBottom}>
          <div className={styles.sections}>
            <Button leftIcon={menuHamburgerIcon} size='medium' />
            <Text content='Temas' />
            <Text content='Artículos' />
            <Text content='Noticias' />
            <Text content='Eventos' />
            <Button leftIcon={searchOutlinedIcon} size='medium' />
          </div>
          <div className={styles.subscription}>
            <Text content='Suscríbete' />
          </div>
        </div>
      </div>
    </nav>
  )
}
