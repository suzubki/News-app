import { Text } from '../../atoms'
import styles from './ThirdSection.module.scss'

export const ThirdSection = () => {
  return (
    <section className={`${styles.section} mx-6`}>
      <div className={styles.sectionTopContent}>
        <Text content='Artículos' size='large' />
        <Text content='Ver más' size='medium' />
      </div>
      <div className={styles.sectionBottomContent}>
        <div className={styles.leftWrapperDocumentsContent}>
          <div className={styles.leftDocumentContent}>
            <div className={styles.leftImageExtraDocument}></div>
            <Text content='Lorem ipsum dolor sit amet, consectetur adispicing elit.' />
          </div>

          <div className={styles.leftDocumentContent}>
            <div className={styles.leftImageExtraDocument}></div>
            <Text content='Lorem ipsum dolor sit amet, consectetur adispicing elit.' />
          </div>
        </div>

        <div className={styles.centerWrapperDocumentContent}>
          <div className={styles.centerDocumentContent}>
            <Text
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim vitae elementum vitae nulla dignissim.'
              size='medium'
            />
            <Text content='Lorem ipsum dolor sit amet consectettur adipsicing elit.' />
            <div className={styles.centerImageExtraDocument}></div>
          </div>
        </div>
        <div className={styles.rightWrapperDocumentsContent}>
          <div className={styles.rightDocumentContent}>
            <div className={styles.rightImageExtraDocument}></div>
            <Text content='Lorem ipsum dolor sit amet, consectetur adispicing elit.' />
          </div>

          <div className={styles.rightDocumentContent}>
            <div className={styles.rightImageExtraDocument}></div>
            <Text content='Lorem ipsum dolor sit amet, consectetur adispicing elit.' />
          </div>
        </div>
      </div>
    </section>
  )
}
