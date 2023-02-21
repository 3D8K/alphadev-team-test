import { makeAutoObservable } from 'mobx'
import { getSpeakers } from '../api/Api'

interface ISpeakers {
  description: string
  gender: string
  name: string
  performance_time: string
  photo_url: string
}
class SpeakersStore {
  speakers: ISpeakers[] = []
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  loadSpeakers() {
    this.setLoading(true)
    return getSpeakers()
      .then((result) => {
        this.speakers = result.response
      })
      .finally(() => {
        this.setLoading(false)
      })
  }
  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }
}

export const speakersStore = new SpeakersStore()
