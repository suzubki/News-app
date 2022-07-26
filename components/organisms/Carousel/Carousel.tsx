import { FC, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { Button } from '../../atoms'

import { DropdownIconBefore, DropdownIconNext } from '../../../assets'
import { IDocument } from '../../../interfaces'

import styles from './Carousel.module.scss'

// import data from '../../../database/seed-data'

interface Props {
  data: IDocument[]
}

export const Carousel: FC<Props> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <div className={styles.emblaPrev} onClick={scrollPrev}>
        <Button LeftIcon={DropdownIconBefore} size='large' />
      </div>
      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {data
              .filter((document) => document.possible_main_content === true)
              .slice(0, 8)
              .map((document, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.emblaSlideInner}>
                    <div>
                      <div className={styles.emblaSlideImage}></div>
                      <div className={styles.emblaTextSlider}>
                        {document.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.emblaNext} onClick={scrollNext}>
        <Button LeftIcon={DropdownIconNext} size='large' />
      </div>
    </>
  )
}
