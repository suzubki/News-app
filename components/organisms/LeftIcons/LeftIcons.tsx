import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../../assets'
import { Button } from '../../atoms'

import styles from './LeftIcons.module.scss'

export const LeftIcons = () => {
  return (
    <div className={styles.containerIcons}>
      <div className={`${styles.twitterIconContainer} border-top-right`}>
        <Button LeftIcon={TwitterIcon} size='extraLarge' />
      </div>
      <div className={styles.instagramIconContainer}>
        <Button LeftIcon={InstagramIcon} size='extraLarge' />
      </div>
      <div className={styles.facebookIconContainer}>
        <Button LeftIcon={FacebookIcon} size='extraLarge' />
      </div>
      <div className={`${styles.youtubeIconContainer} border-bottom-right`}>
        <Button LeftIcon={YoutubeIcon} size='extraLarge' />
      </div>
    </div>
  )
}
