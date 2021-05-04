import React from 'react'
import './styles.css'
import Play from '../Play'

interface IChip {
  children: string,
  thumbnail: string,
  onClick?: () => void
}

const Chip: React.FC<IChip> = ({children, thumbnail, onClick}) => {
  return (
    <div className="chip" onClick={onClick}>
      <div className="chip__thumbnail" style={{backgroundImage: `url(${thumbnail})`}} data-testid="chip-thumbnail"></div>
      <div className="chip__container">
        <label className="chip__title">{children}</label>
        <Play />
      </div>
    </div>
  )
}

export default Chip
