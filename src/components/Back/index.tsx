import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

interface IBack {
  url: string
}

const Back: React.FC<IBack> = ({url}) => {
  return (
    <Link className="back" to={url}>
      <svg
        className="back__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
      </svg>
    </Link>
  )
}

export default Back
