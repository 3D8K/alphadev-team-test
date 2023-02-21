import React from 'react'

interface ISpeakerCardProps {
  image: string
  name: string
  description: string
}
export function SpeakerCard({ image, name, description }: ISpeakerCardProps) {
  return (
    <div className='speaker-card'>
      <img className='speaker-card__image' src={image} alt='speaker' />
      <h3 className='speaker-card__name'>{name}</h3>
      <p className='speaker-card__description'>{description}</p>
      <a href='#' className='speaker-card__more'>
        Подробнее
      </a>
    </div>
  )
}
