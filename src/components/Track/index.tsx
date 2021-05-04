import React from 'react'
import './styles.css'
import Heart from '../Heart'

export interface ITrack {
  name: string,
  length: string,
  number: number
}

const Track: React.FC<ITrack> = ({name, length, number}) => {
  return (
    <div className="track">
      <div className="track__container">
        <span className="track__number">{number}</span>
        <div className="track__play" />
        <span className="track__name">{name}</span>
      </div>
      <div className="track__container">
        <Heart />
        <span className="track__length">{length}</span>
      </div>
    </div>
  )
}

export default Track
