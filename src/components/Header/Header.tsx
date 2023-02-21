import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { ReactComponent as LogoText } from '../../assets/img/logo_text.svg'
import { Button } from '../Button/Button'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const menuTrigger = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header>
      <div className='header__noise_right'></div>
      <div className='header__noise_left'></div>
      <div className='header'>
        <div className='container'>
          <div className='navbar'>
            <a href='/' className='logo__wrapper'>
              <div className='logo__image'>
                <Logo />
              </div>
              <div className='logo__text'>
                <LogoText />
              </div>
            </a>
            <nav>
              <ul className={`menu ${openMenu && 'active'}`}>
                <li className='menu__item'>
                  <a
                    href='#about'
                    className='menu__item-link'
                    data-scroll
                    onClick={() => setOpenMenu(false)}
                  >
                    о мероприятии
                  </a>
                </li>
                <li className='menu__item'>
                  <a
                    href='#speakers'
                    className='menu__item-link'
                    data-scroll
                    onClick={() => setOpenMenu(false)}
                  >
                    спикеры
                  </a>
                </li>
                <li className='menu__item button'>
                  <Button text={'Регистрация'} link='#' />
                </li>
              </ul>
            </nav>
            <Button addClass={'header__button'} text={'Регистрация'} link='#' />
            <button className={`burger ${openMenu && 'active'}`} onClick={menuTrigger}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
