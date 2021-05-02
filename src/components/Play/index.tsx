import React from 'react'
import './styles.css'

const Play = () => {
  return (
    <button className="play">
      <svg
        className="play__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3 22v-20l18 10-18 10z" />
      </svg>
    </button>
  )
}

export default Play
