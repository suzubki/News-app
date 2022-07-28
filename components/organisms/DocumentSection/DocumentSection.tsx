import { FC } from 'react'

import { Button, Text } from '../../atoms'

import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../../assets'
import { IDocument } from '../../../interfaces'

import styles from './DocumentSection.module.scss'

interface Props {
  data: IDocument
}

export const DocumentSection: FC<Props> = ({ data }) => {
  return (
    <section className={`${styles.section} mx-6 mt-4`}>
      <div className={`${styles.leftContent} ml-4`}>
        <div className={`${styles.nameAndImageAboutDoc}`}>
          <Text content={data.title} size='large' />
          <div className={styles.subtitleAndDescriptionAboutDoc}>
            {data.subtitle && (
              <Text content={data.subtitle} size='extraSmall' color='gray' />
            )}
            <Text content={data.summary} size='specialSmall' />
          </div>
          <div className={styles.leftImage}></div>
          {/* Próximamente un Next/Image */}
          <div className={`${styles.whoPublishedAndShareDoc}`}>
            <div className={styles.whoPublishedContent}>
              <Text content='Publicado el 01/01/2001' color='gray' />
              <Text content={data.author} color='gray' />
            </div>
            <div className={styles.rightIconsContainer}>
              <div className={styles.rightTwitterIconContainer}>
                <Button LeftIcon={TwitterIcon} size='medium' />
              </div>
              <div className={styles.rightInstagramIconContainer}>
                <Button LeftIcon={InstagramIcon} size='medium' />
              </div>
              <div className={styles.rightFacebookIconContainer}>
                <Button LeftIcon={FacebookIcon} size='medium' />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.descriptionAboutDoc}`}>
          <Text content={data.description} />
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={`${styles.adContent}`}></div>
        <div className={`${styles.adContent} mt-2`}></div>
        <div className={`${styles.adContent} mt-2`}></div>
      </div>
    </section>
  )
}
