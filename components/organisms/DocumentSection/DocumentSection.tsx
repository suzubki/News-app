import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../../assets'
import { Button, Text } from '../../atoms'

import styles from './DocumentSection.module.scss'

export const DocumentSection = () => {
  return (
    <section className={`${styles.section} mx-6 mt-4`}>
      <div className={`${styles.leftContent} ml-4`}>
        <div className={`${styles.nameAndImageAboutDoc}`}>
          <Text
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dui a metus, scelerisque vel feugiat lectus lobortis viverra.'
            size='large'
          />
          <div className={styles.leftImage}></div>
          {/* Próximamente un Next/Image */}
          <div className={`${styles.whoPublishedAndShareDoc} mt-1`}>
            <div className={styles.whoPublishedContent}>
              <Text content='Publicado el 01/01/2001' color='gray' />
              <Text content='Por Darwin Narro' color='gray' />
            </div>
            <div className={styles.rightIconsContainer}>
              <div className={styles.rightTwitterIconContainer}>
                <Button LeftIcon={TwitterIcon} size='medium' />
              </div>
              <div className={styles.rightInstagramIconContainer}>
                <Button LeftIcon={InstagramIcon} size='medium' />
              </div>
              <div className={styles.rightFacebookIconContainer}>
                <Button LeftIcon={FacebookIcon} size='medium' />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.descriptionAboutDoc} mt-2`}>
          <Text
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sem amet proin bibendum. Diam quis quisque condimentum. Id sollicitudin lorem lacus in nunc magnis arcu morbi sed. Nisl nisi, dui lacus sollicitudin elementum tempor vel velit. Arcu in massa in ipsum eget commodo, senectus. Scelerisque est mattis a tortor dui massa elementum, egestas. Sed amet lobortis scelerisque sollicitudin tellus sapien. A quis risus, quam bibendum sagittis nisl venenatis. Mollis vestibulum, interdum quam gravida nullam. Urna sodales nisi, montes, et orci mi.
            Id arcu euismod auctor purus dictum tristique ac, tellus sagittis. Ut quis laoreet purus a quam faucibus. At at et turpis scelerisque sed. Sem sit eu, neque a morbi iaculis ridiculus sed. Gravida facilisi venenatis elementum integer commodo. Erat vel vestibulum sapien ante.
            Nibh tincidunt bibendum amet, orci, nulla volutpat commodo. Erat tellus sit at habitant tortor facilisi mauris. Iaculis iaculis nunc, pulvinar sed lobortis ipsum interdum est, aliquam. Varius ipsum, vel eros, et cum commodo sit integer convallis. Amet non, dolor aenean viverra cursus egestas enim. Vel aliquet massa adipiscing urna. Eget orci consequat lectus tempor porta. Sit aliquam facilisis nibh diam, duis. Id nulla nisl proin nunc. Elementum ligula non vitae sapien.
            Netus nulla id nibh magna vel elementum pulvinar vulputate. Gravida malesuada justo et mauris. Elementum viverra ut nunc ut suscipit. Nulla congue egestas duis lectus est porta curabitur ac, egestas. Mauris malesuada lectus duis volutpat sit et pulvinar viverra. Magna ac morbi urna enim, lacinia orci at tellus id. Amet gravida egestas aenean egestas.
            Id duis neque nisi et, aenean sed aliquet enim accumsan. Imperdiet fringilla eget auctor rutrum ut pulvinar aliquam. Convallis nibh at pellentesque sollicitudin scelerisque. Rhoncus vel convallis massa ut id. Vitae sodales quis vel non sociis. Risus integer vel lacus lacus eu. Nec tortor augue varius et mauris integer. Tellus sit integer sed mattis odio felis sed enim. Duis felis malesuada at elit sodales amet netus. Massa pharetra quisque viverra ipsum risus, massa ante fringilla.
            Pellentesque rutrum nec commodo neque. At non felis justo sed vulputate in eget. A lorem laoreet nunc posuere aliquam ornare ullamcorper. Nulla ac porttitor fames molestie velit, lobortis proin. In ut tortor consectetur magnis.'
          />
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={`${styles.adContent}`}></div>
        <div className={`${styles.adContent} mt-2`}></div>
        <div className={`${styles.adContent} mt-2`}></div>
      </div>
    </section>
  )
}
