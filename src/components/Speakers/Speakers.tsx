import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { SpeakerCard } from './SpeakerCard'
import { speakersStore } from '../../store/speakersStore'
import { Loader } from '../Loader/Loader'

export const Speakers = observer(() => {
  useEffect(() => {
    speakersStore.loadSpeakers()
  }, [])
  return (
    <section className='section__speakers'>
      <div className='speakers__blob'></div>
      <div className='container' id='speakers'>
        <div className='speakers'>
          {speakersStore.isLoading ? (
            <Loader />
          ) : (
            <>
              <div className='speakers__title'>Спикеры нашего форума</div>
              <div className='speakers__inside-wrapper'>
                {speakersStore.speakers.map((speaker) => (
                  <SpeakerCard
                    image={speaker.photo_url}
                    name={speaker.name}
                    description={speaker.description}
                    key={speaker.name}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
})
