import { Text } from '../../../atoms'

import styles from './FirstSection.module.scss'

export const FirstSection = () => {
  return (
    <section className={`${styles.section} mx-6 mt-2`}>
      <div className={styles.sectionLeftContent}>
        <div className={styles.leftImage}>
          {/* Img de la noticia, posteriormente será un NextImage */}
        </div>
        <div className={`${styles.leftDescriptionContent} mt-1`}>
          <Text content='Categoría' color='red' />
          <Text
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, at bladint, tempus vel aliquam'
            size='large'
            color='red'
          />
          <Text content='Por Darwin Narro' color='gray' size='extraSmall' />
        </div>
      </div>

      <div className={styles.sectionRigthContent}>
        <div className={`${styles.boxContent}`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' color='red' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
              color='red'
            />
            <Text content='Por Darwin Narro' color='gray' size='extraSmall' />
          </div>
        </div>
        <div className={`${styles.boxContent} mt-1`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' color='red' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
            />
            <Text content='Por Darwin Narro' color='gray' size='extraSmall' />
          </div>
        </div>
        <div className={`${styles.boxContent} mt-1`}>
          <div className={styles.rigthImage}>
            {/* Img de la noticia, posteriormente será un NextImage */}
          </div>
          <div className={`${styles.rigthDescriptionContent} ml-1 my-2`}>
            <Text content='Categoría' color='red' />
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              bold
            />
            <Text content='Por Darwin Narro' color='gray' size='extraSmall' />
          </div>
        </div>
      </div>
    </section>
  )
}
