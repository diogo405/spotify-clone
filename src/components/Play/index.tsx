import React from 'react'
import './styles.css'

interface IPlay {
  size?: 'regular' | 'big'
}

const Play: React.FC<IPlay> = ({size = 'regular'}) => {

  return (
    <button className={size === 'big' ? 'play play--big' : 'play'}>
      <svg
        className="play__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M3 22v-20l18 10-18 10z" />
      </svg>
    </button>
  )
}

export default Play
