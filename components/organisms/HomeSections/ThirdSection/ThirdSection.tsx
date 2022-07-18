import Link from 'next/link'
import { Text } from '../../../atoms'
import { Section } from '../../../organisms'
import styles from './ThirdSection.module.scss'

export const ThirdSection = () => {
  return (
    <Section column>
      <div className={styles.sectionTopContent}>
        <Text content='Artículos' size='large' />
        <Link href='/articulos'>
          <a>
            <div className={styles.seeMoreArticles}>
              <Text content='Ver más' size='small' bold />
            </div>
          </a>
        </Link>
      </div>
      <div className={`${styles.sectionBottomContent} mt-2`}>
        <div className={styles.leftWrapperDocumentsContent}>
          <div className={styles.leftDocumentContent}>
            <div className={styles.leftImageExtraDocument}></div>
            <div className={styles.leftExtraDocumentDescription}>
              <Text
                content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                bold
              />
            </div>
          </div>

          <div className={`${styles.leftDocumentContent} mt-1`}>
            <div className={styles.leftImageExtraDocument}></div>
            <div className={styles.leftExtraDocumentDescription}>
              <Text
                content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                bold
              />
            </div>
          </div>
        </div>

        <div className={styles.centerWrapperDocumentContent}>
          <div className={styles.centerDocumentContent}>
            <div className={styles.centerDocumentDescription}>
              <Text
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim vitae elementum vitae nulla dignissim.'
                size='large'
              />
              <Text content='Lorem ipsum dolor sit amet consectettur adipsicing elit.' />
            </div>
            <div className={`${styles.centerImageExtraDocument} mt-1`}></div>
          </div>
        </div>
        <div className={styles.rightWrapperDocumentsContent}>
          <div className={styles.rightDocumentContent}>
            <div className={styles.rightImageExtraDocument}></div>
            <div className={styles.rightExtraDocumentDescription}>
              <Text
                content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                bold
              />
            </div>
          </div>

          <div className={`${styles.rightDocumentContent} mt-1`}>
            <div className={styles.rightImageExtraDocument}></div>
            <div className={styles.rightExtraDocumentDescription}>
              <Text
                content='Lorem ipsum dolor sit amet, consectetur adispicing elit.'
                bold
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
