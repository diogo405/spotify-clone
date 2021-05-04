import {ICard} from './components/Card'
import {ITrack} from './components/Track'
import recentPlayed from './json/recentPlayed.json'
import suggestions from './json/suggestions.json'
import playlists from './json/playlists.json'
import tracks from './json/tracks.json'

export interface ISuggestion {
  id: number,
  thumbnail: string,
  title: string,
}

export const getGreeting = (): Promise<Array<ISuggestion>> => {
  return new Promise<Array<ISuggestion>>((resolve, reject) => {
    setTimeout(() => {
      resolve(suggestions)
    }, Math.random() * 2 * 1000)
  })
}

export const getRecentPlayed = (): Promise<Array<ICard>> => {
  return new Promise<Array<ICard>>((resolve, reject) => {
    setTimeout(() => {
      resolve(recentPlayed)
    }, Math.random() * 3 * 1000)
  })
}

export const getPlaylists = (): Promise<Array<string>> => {
  return new Promise<Array<string>>((resolve, reject) => {
    setTimeout(() => {
      resolve(playlists)
    }, Math.random() * 3 * 1000)
  })
}

export const getTracks = (): Promise<Array<ITrack>> => {
  return new Promise<Array<ITrack>>((resolve, reject) => {
    setTimeout(() => {
      resolve(tracks)
    }, Math.random() * 3 * 1000)
  })
}
