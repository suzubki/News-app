import { Text } from '../../atoms'
import styles from './SecondSection.module.scss'

export const SecondSection = () => {
  return (
    <>
      <section className={`${styles.section} mx-6 mt-3`}>
        <div className={styles.sectionTopContent}>
          <div className={`${styles.recentlyPub} mr-2`}>
            <Text content='Publicado recientemente' size='large' />
          </div>
          <div className={styles.lineSpace}></div>
          <div className={`${styles.aboutDocs} ml-2`}>
            <Text content='Todo' />
            <Text content='Artículos' />
            <Text content='Noticias' />
            <Text content='Tecnología' />
          </div>
        </div>
        <div className={`${styles.sectionBottomContent} mt-2`}>
          <div className={styles.leftContent}>
            <div className={styles.leftImageWithDescription}>
              {/* Proximamente un NextImage */}
            </div>

            <div className={styles.leftExtraDocumentContent}>
              <div className={styles.leftImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.leftExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text content='Por Darwin Narro' />
              </div>
            </div>

            <div className={styles.leftExtraDocumentContent}>
              <div className={styles.leftImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.leftExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text content='Por Darwin Narro' />
              </div>
            </div>
          </div>

          {/* Right Content  */}
          <div className={styles.rightContent}>
            <div className={styles.rightImageWithDescription}>
              {/* Proximamente un NextImage */}
            </div>

            <div className={styles.rightExtraDocumentContent}>
              <div className={styles.rightImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.rightExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text content='Por Darwin Narro' />
              </div>
            </div>

            <div className={styles.rightExtraDocumentContent}>
              <div className={styles.rightImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.rightExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text content='Por Darwin Narro' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
