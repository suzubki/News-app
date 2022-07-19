import { useContext } from 'react'
import NextLink from 'next/link'

import { UIContext } from '../../../context'
import { Text, Button } from '../../atoms'
import {
  DropdownIconBefore,
  DropdownIconNext,
  MenuHamburgerIcon,
  SearchOutlinedIcon,
} from '../../../assets'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  const {
    hamburgerIsOpen,
    closeHamburger,
    openHamburger,

    searchIsOpen,
    openSearch,
    toggleSearch,
  } = useContext(UIContext)

  return (
    <nav className={`${styles.navbar} mt-x1 px-2`}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <NextLink href='/'>
            <a>
              <Text content='LOGO' />
            </a>
          </NextLink>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuContentTop}>
            <div className={styles.todaysDate}>
              <Text content='01 de Enero, 2022' color='gray' />
            </div>
            <div className={styles.infoAboutUs}>
              <NextLink href='/contactanos'>
                <a>
                  <Text content='Contáctanos' />
                </a>
              </NextLink>
              <NextLink href='/sobre-nosotros'>
                <a>
                  <Text content='Sobre Nosotros' />
                </a>
              </NextLink>
            </div>
          </div>

          <div className={styles.menuContentBottom}>
            <div className={styles.sections}>
              {/* OnClick Hamburger Icon */}
              <div
                onMouseOver={openHamburger}
                onMouseOut={closeHamburger}
                className={styles.menuContainer}
                tabIndex={0}
              >
                <Button LeftIcon={MenuHamburgerIcon} size='medium' />
                <Text content='Menu' size='medium' />
              </div>
              <NextLink href='/articulos'>
                <a>
                  <Text content='Artículos' size='medium' />
                </a>
              </NextLink>
              <NextLink href='/eventos'>
                <a>
                  <Text content='Eventos' size='medium' />
                </a>
              </NextLink>
              <NextLink href='/categorias/doxa'>
                <a>
                  <Text content='Doxa' size='medium' />
                </a>
              </NextLink>

              {/* OnClick Search Icon */}
              <div>
                <div onClick={toggleSearch}>
                  <Button LeftIcon={SearchOutlinedIcon} size='medium' />
                </div>
                {/* Search Bar */}
                {searchIsOpen && (
                  <div
                    className={`${styles.dropdownSearch} ${
                      searchIsOpen ? 'animate__animated animate__fadeIn' : ''
                    }`}
                    onMouseOver={openSearch}
                  >
                    <div className={styles.dropdownSearchContainer}>
                      <input
                        type='text'
                        placeholder='Buscar...'
                        className={styles.dropdownSearchInput}
                        autoFocus
                      />
                      <Button LeftIcon={SearchOutlinedIcon} size='medium' />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.subscription}>
              <NextLink href='/suscribete'>
                <a>
                  <Text content='Suscríbete' size='medium' />
                </a>
              </NextLink>
            </div>
          </div>
          {/* Dropdown Content Menu  */}
          {hamburgerIsOpen && (
            <div
              className={`${styles.dropdownContentMenu} ${
                hamburgerIsOpen ? 'animate__animated animate__fadeIn' : ''
              }`}
              onMouseOver={openHamburger}
              onMouseOut={closeHamburger}
            >
              {/* En onblur no queria funciona asi que el autofocus lo hace funcionar xdd */}
              <input type='text' autoFocus className={styles.inputDisabled} />
              {/* ----- */}
              <div className={styles.dropdownContentContainer}>
                <div className={styles.dropdownContentLeftItems}>
                  <Text content='Ciencia Política' bold />
                  <Text content='Derecho' bold />
                  <Text content='Economía' bold />
                  <Text content='Filosofía' bold />
                  <Text content='Sociología' bold />
                </div>
                <div className={styles.dropdownContentRightItems}>
                  <div className={`${styles.dropdownContainerRight}`}>
                    <div className={styles.dropdownIconBefore}>
                      <Button LeftIcon={DropdownIconBefore} size='large' />
                    </div>
                    <div className={styles.dropdownDocumentContainer}>
                      <div className={styles.dropdownImage}></div>
                      <div className={styles.dropdownDocumentDescription}>
                        <Text
                          content='Categoría'
                          color='red'
                          size='extraSmall'
                        />
                        <Text
                          content='Lorem ipsum dolor sit amet, consectetur adispicing elit'
                          size='extraSmall'
                        />
                      </div>
                    </div>
                    <div className={styles.dropdownDocumentContainer}>
                      <div className={styles.dropdownImage}></div>
                      <div className={styles.dropdownDocumentDescription}>
                        <Text
                          content='Categoría'
                          size='extraSmall'
                          color='red'
                        />
                        <Text
                          content='Lorem ipsum dolor sit amet, consectetur adispicing elit'
                          size='extraSmall'
                        />
                      </div>
                    </div>
                    <div className={styles.dropdownIconNext}>
                      <Button LeftIcon={DropdownIconNext} size='large' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
