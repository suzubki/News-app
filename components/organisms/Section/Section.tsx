import { FC, ReactNode } from 'react'
import styles from './Section.module.scss'

interface Props {
  children: ReactNode

  column?: boolean
}

export const Section: FC<Props> = ({ children, column = false }) => {
  return (
    <section className={`${styles.section} mt-2`}>
      <div
        className={`${styles.sectionContentContainer} ${
          column ? 'direction-column' : ''
        }`}
      >
        {children}
      </div>
    </section>
  )
}
