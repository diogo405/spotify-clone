import React from 'react'
import Play from '../Play'
import './styles.css'

export interface ICard {
  id: number,
  title: string,
  artist: string,
  thumbnail: string,
}

const Card: React.FC<ICard> = ({title, artist, thumbnail}) => {
  return (
    <div className="card">
      <div
        className="card__thumbnail"
        style={{backgroundImage: `url(${thumbnail})`}}
        data-testid="card-thumbnail"
      ></div>
      <div className="card__content">
        <div className="card__wrapper">
          <h3 className="card__title">{title}</h3>
          <span className="card__artist">{artist}</span>
        </div>
        <Play />
      </div>
    </div>
  )
}

export default Card
