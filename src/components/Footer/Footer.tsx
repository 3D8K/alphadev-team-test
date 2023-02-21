import React from 'react'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { ReactComponent as LogoText } from '../../assets/img/logo_text.svg'
import { ReactComponent as Vk } from '../../assets/img/socials/vk.svg'
import { ReactComponent as Facebook } from '../../assets/img/socials/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/img/socials/instagram.svg'
import { ReactComponent as Telegram } from '../../assets/img/socials/telegram.svg'

export function Footer() {
  return (
    <section className='section__footer'>
      <div className='footer__blob'></div>
      <div className='container'>
        <footer className='footer'>
          <a href='/' className='logo__wrapper footer__logo'>
            <div className='logo__image'>
              <Logo />
            </div>
            <div className='logo__text'>
              <LogoText />
            </div>
          </a>
          <ul className='footer__polit-list'>
            <li className='footer__polit-item'>
              <a href='#'>Политика конфиденциальности</a>
            </li>
            <li className='footer__polit-item'>
              <a href='#'>Публичная оферта</a>
            </li>
            <li className='footer__polit-item'>
              <a href='tel:+79121234567'>+7 912 123-45-67</a>
            </li>
            <li className='footer__polit-item'>
              <a href='mailto:about@microsoftforum.com'>about@microsoftforum.com</a>
            </li>
          </ul>
          <ul className='footer__about-list'>
            <li className='footer__about-item'>
              <a href='#'>о мероприятии</a>
            </li>
            <li className='footer__about-item'>
              <a href='#'>темы</a>
            </li>
            <li className='footer__about-item'>
              <a href='#'>расписание</a>
            </li>
            <li className='footer__about-item'>
              <a href='#'>спикеры</a>
            </li>
            <li className='footer__about-item'>
              <a href='#'>контакты</a>
            </li>
          </ul>
          <div className='footer__socials-wrapper'>
            <a href='#' className='footer__socials'>
              <Vk />
            </a>
            <a href='#' className='footer__socials'>
              <Facebook />
            </a>
            <a href='#' className='footer__socials'>
              <Instagram />
            </a>
            <a href='#' className='footer__socials'>
              <Telegram />
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
