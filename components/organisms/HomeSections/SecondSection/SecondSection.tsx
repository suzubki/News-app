import { useState } from 'react'
import Link from 'next/link'

import { Text } from '../../../atoms'
import { Section } from '../../../organisms'

import { shrinkText } from '../../../../utils'
import fakeData from '../../../../database/seed-data'

import styles from './SecondSection.module.scss'

export const SecondSection = () => {
  const [sectionClicked, setSectionClicked] = useState('Todo')
  const [data] = useState(fakeData)

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
            <Text content='Todo' bold />
          </div>
          <div
            className={`${
              sectionClicked === 'Sociologia'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Sociologia')}
          >
            <Text content='Sociologia' bold />
          </div>
          <div
            className={`${
              sectionClicked === 'Tecnologia'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Tecnologia')}
          >
            <Text content='Tecnología' bold />
          </div>
          <div
            className={`${
              sectionClicked === 'Derecho'
                ? styles.sectionDocActive + ' animate__animated animate__pulse'
                : ''
            }`}
            onClick={() => setSectionClicked('Derecho')}
          >
            <Text content='Derecho' bold />
          </div>
        </div>
      </div>

      <div className={`${styles.sectionBottomContent} `}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          {data.slice(2, 6).map((document) => (
            <Link href={`/articulos/${document.slug}`} key={document.slug}>
              <a>
                <div className={styles.leftExtraDocumentContent}>
                  <div className={styles.leftImageExtraDocument}>
                    {/* Proximamente un NextImage */}
                  </div>
                  <div
                    className={`${styles.leftExtraDocumentDescription} ml-1 my-2`}
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

        {/* Right Content  */}
        <div className={styles.rightContent}>
          {data.slice(5, 9).map((document) => (
            <Link href='/articulos' key={`documentosExtras-${document.slug}`}>
              <a>
                <div className={styles.rightExtraDocumentContent}>
                  <div className={styles.rightImageExtraDocument}>
                    {/* Proximamente un NextImage */}
                  </div>
                  <div
                    className={`${styles.rightExtraDocumentDescription} ml-1 my-2`}
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

          {/* <Link href='/articulos'>
            <a>
              <div className={styles.rightExtraDocumentContent}>
                <div className={styles.rightImageExtraDocument}>
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
            </a>
          </Link> */}

          {/* <Link href='/articulos'>
            <a>
              <div className={styles.rightExtraDocumentContent}>
                <div className={styles.rightImageExtraDocument}>
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
            </a>
          </Link> */}
        </div>
      </div>
    </Section>
  )
}
