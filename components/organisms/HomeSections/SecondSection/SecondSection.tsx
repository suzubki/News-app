import { useState } from 'react'
import Link from 'next/link'

import { Text } from '../../../atoms'
import { Section } from '../../../organisms'

import { shrinkText } from '../../../../utils'
import fakeData from '../../../../database/seed-data'

import styles from './SecondSection.module.scss'
import { filterData } from '../../../../utils/dataHandlers'
import { IDocument } from '../../../../interfaces'

export const SecondSection = () => {
  const [sectionClicked, setSectionClicked] = useState('Todo')
  const [data] = useState<IDocument[]>(fakeData)

  const dataToShow = filterData(data, sectionClicked)

  return (
    <Section column>
      <div className={styles.sectionTopContent}>
        <div className='mr-2 my-auto'>
          <Text content='Publicado recientemente' size='large' />
        </div>
        <div className={styles.lineSpace}></div>
        <div className={`${styles.aboutDocs} ml-2`}>
          <div
            className={`${
              sectionClicked === 'Todo'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Todo')}
          >
            <Text
              content='Todo'
              color={`${sectionClicked === 'Todo' ? 'lightWhite' : 'main'}`}
            />
          </div>
          <div
            className={`${
              sectionClicked === 'Sociologia'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Sociologia')}
          >
            <Text
              content='Sociología'
              color={`${
                sectionClicked === 'Sociologia' ? 'lightWhite' : 'main'
              }`}
            />
          </div>
          <div
            className={`${
              sectionClicked === 'Tecnologia'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Tecnologia')}
          >
            <Text
              content='Tecnología'
              color={`${
                sectionClicked === 'Tecnologia' ? 'lightWhite' : 'main'
              }`}
            />
          </div>
          <div
            className={`${
              sectionClicked === 'Derecho'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Derecho')}
          >
            <Text
              content='Derecho'
              color={`${sectionClicked === 'Derecho' ? 'lightWhite' : 'main'}`}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.sectionBottomContent} `}>
        <div className={styles.bottomContainer}>
          {dataToShow.map((document) => (
            <Link href='/articulos' key={`documentosExtras-${document.slug}`}>
              <a>
                <div
                  className={
                    styles.extraDocumentContent +
                    ' animate__animated animate__fadeIn'
                  }
                >
                  <div className={styles.imageExtraDocument}></div>
                  <div
                    className={`${styles.extraDocumentDescription} ml-1 my-2`}
                  >
                    <Text
                      content={document.category}
                      color='red'
                      size='extraSmall'
                    />
                    <Text content={document.title} bold />
                    <Text
                      content={shrinkText(document.summary, 30)}
                      size='extraSmall'
                    />
                    <Text
                      content={document.author}
                      color='gray'
                      size='extraSmall'
                      align='right'
                    />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
