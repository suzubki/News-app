import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../../assets'
import { Button, Text } from '../../atoms'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-4`}>
      <div className={`${styles.sectionContentContainer} p-2`}>
        <div className={styles.descriptionPage}>
          <Text content='Título de la página' size='medium' />
          <Text content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum semper ipsum eget bibendum aenean quis. Quis pellentesque tempus augue viverra tincidunt. Ac non, aliquam, nullam quam et egestas. Suspendisse magnis nam adipiscing ut sit netus nunc imperdiet. ' />
        </div>
        <div className={styles.aboutPage}>
          <ul>
            <li>Nosotros</li>
            <li>Contáctanos</li>
            <li>Únetenos</li>
            <li>Suscríbete a la revista</li>
            <li>Calendario de eventos</li>
          </ul>
        </div>
        <div className={styles.footerIcons}>
          <Button LeftIcon={LinkedinIcon} size='large' />
          <Button LeftIcon={FacebookIcon} size='large' />
          <Button LeftIcon={YoutubeIcon} size='large' />
          <Button LeftIcon={TwitterIcon} size='large' />
          <Button LeftIcon={InstagramIcon} size='large' />
        </div>
      </div>
    </footer>
  )
}
