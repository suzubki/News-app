import { Text } from '../../../atoms'
import styles from './SecondSection.module.scss'

export const SecondSection = () => {
  return (
    <>
      <section className={`${styles.section} mx-6 mt-3`}>
        <div className={styles.sectionTopContent}>
          <div className='mr-2 my-auto'>
            <Text content='Publicado recientemente' size='large' />
          </div>
          <div className={styles.lineSpace}></div>
          <div className={`${styles.aboutDocs} ml-2`}>
            <div className={`${styles.sectionDocActive}`}>
              <Text content='Todo' bold />
            </div>
            <div>
              <Text content='Noticias' bold />
            </div>
            <div>
              <Text content='Tecnología' bold />
            </div>
            <div>
              <Text content='Artículos' bold />
            </div>
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
                <Text content='Categoría' color='red' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text
                  content='Por Darwin Narro'
                  color='gray'
                  size='extraSmall'
                />
              </div>
            </div>

            <div className={styles.leftExtraDocumentContent}>
              <div className={styles.leftImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.leftExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' color='red' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text
                  content='Por Darwin Narro'
                  color='gray'
                  size='extraSmall'
                />
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
                <Text content='Categoría' color='red' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text
                  content='Por Darwin Narro'
                  color='gray'
                  size='extraSmall'
                />
              </div>
            </div>

            <div className={styles.rightExtraDocumentContent}>
              <div className={styles.rightImageExtraDocument}>
                {/* Proximamente un NextImage */}
              </div>
              <div
                className={`${styles.rightExtraDocumentDescription} ml-1 my-2`}
              >
                <Text content='Categoría' color='red' />
                <Text
                  content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                  bold
                />
                <Text
                  content='Por Darwin Narro'
                  color='gray'
                  size='extraSmall'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
