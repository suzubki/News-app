import { Text } from '../../atoms'

import styles from './FirstSection.module.scss'

export const FirstSection = () => {
  return (
    <section className={`${styles.section} mx-6 mt-2`}>
      <div className={styles.sectionLeftContent}>
        <div className={styles.leftImage}>
          {/* Img de la noticia, posteriormente será un NextImage */}
        </div>
        <div className={styles.leftDescriptionContent}>
          <Text content='Categoría' />
          <Text
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, at bladint, tempus vel aliquam'
            size='medium'
          />
          <Text content='Por Darwin Narro' />
        </div>
      </div>

      <div className={styles.sectionRigthContent}>
        <div className={`${styles.boxContent}`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
            />
            <Text content='Por Darwin Narro' />
          </div>
        </div>
        <div className={`${styles.boxContent} mt-1`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
            />
            <Text content='Por Darwin Narro' />
          </div>
        </div>
        <div className={`${styles.boxContent} mt-1`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
            />
            <Text content='Por Darwin Narro' />
          </div>
        </div>
      </div>
    </section>
  )
}
