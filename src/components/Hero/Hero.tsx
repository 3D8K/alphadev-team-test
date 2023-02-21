import React from 'react'
import { Button } from '../Button/Button'
import FaceImage from '../../assets/img/hero_face.png'
export function Hero() {
  return (
    <section className='section__hero'>
      <div className='hero__image'>
        <img src={FaceImage} alt='face' />
      </div>
      <div className='hero__noise_bottom'></div>
      <div className='container' id='about'>
        <div className='hero'>
          <div className='hero__title_wrapper'>
            <h3 className='hero__title'>Форум Microsoft</h3>
            <h3 className='hero__title'>
              «Finance industry trust
              <br /> in AI and IT-Security»
            </h3>
          </div>
          <p className='hero__text'>
            Масштабная кибератака и устаревшее оборудование может привести к потере клиентов,
            ухудшить отношения с партнёрами и учредителями, а невыполнение требований
            законодательства может привести к существенным штрафам и даже к блокировке ресурсов
          </p>
          <p className='hero__subtitle'>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
          <Button text={'регистрация'} link={'#'} addClass={'hero__button'} />
        </div>
      </div>
    </section>
  )
}
