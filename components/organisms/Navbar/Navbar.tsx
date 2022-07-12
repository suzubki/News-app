import { Text, Button } from '../../atoms'
import { MenuHamburgerIcon, SearchOutlinedIcon } from '../../../assets'

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
            <Text content='Contáctanos' />
            <Text content='Sobre Nosotros' />
          </div>
        </div>
        <div className={styles.menuContentBottom}>
          <div className={styles.sections}>
            <Button LeftIcon={MenuHamburgerIcon} size='medium' />
            <Text content='Temas' size='medium' />
            <Text content='Artículos' size='medium' />
            <Text content='Noticias' size='medium' />
            <Text content='Eventos' size='medium' />
            <Button LeftIcon={SearchOutlinedIcon} size='medium' />
          </div>
          <div className={styles.subscription}>
            <Text content='Suscríbete' size='medium' />
          </div>
        </div>
      </div>
    </nav>
  )
}
