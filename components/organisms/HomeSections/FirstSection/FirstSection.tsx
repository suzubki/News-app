import { useState } from 'react'
import NextLink from 'next/link'

import { Text } from '../../../atoms'
import { Section } from '../../../organisms'

import styles from './FirstSection.module.scss'

import fakeData from '../../../../database/seed-data'
import { shrinkText } from '../../../../utils'

export const FirstSection = () => {
  const [data] = useState(fakeData)

  // TODO: Arreglarlo de manera descendente, así obtenemos los 4primeros elementos
  const dataMainContent = data.filter(
    (document) => document?.possible_main_content === true
  )

  return (
    <Section>
      <div className={styles.sectionLeftContent}>
        <NextLink href={`/articulos/${dataMainContent[0].slug}`}>
          <a>
            <div>
              <div className={styles.leftImage}>
                {/* Img de la noticia, posteriormente será un NextImage */}
              </div>
              <div className={`${styles.leftDescriptionContent}`}>
                <Text
                  content={dataMainContent[0].title}
                  size='large'
                  color='red'
                />
                <div>
                  <Text
                    content={dataMainContent[0].category}
                    color='red'
                    size='extraSmall'
                  />
                  <Text
                    content={`por ${dataMainContent[0].author}`}
                    color='gray'
                    size='extraSmall'
                  />
                </div>
                <Text content={shrinkText(dataMainContent[0].summary, 50)} />
              </div>
            </div>
          </a>
        </NextLink>
      </div>

      <div className={styles.sectionRigthContent}>
        {dataMainContent.slice(1, 4).map((document, index) => (
          <NextLink
            href={`/articulos/${document.slug}`}
            key={`${index}-${document.slug}`}
          >
            <a>
              <div className={`${styles.boxContent}`}>
                <div className={styles.rigthImage}>
                  {/* Img de la noticia, posteriormente será un NextImage */}
                </div>
                <div className={`${styles.rigthDescriptionContent} ml-1`}>
                  <Text
                    content={`${document.category || 'General'}`}
                    color='red'
                    size='extraSmall'
                  />
                  <Text content={document.title} bold color='red' />
                  <Text
                    content={shrinkText(document.summary, 10)}
                    size='extraSmall'
                  />
                </div>
              </div>
            </a>
          </NextLink>
        ))}
      </div>
    </Section>
  )
}
