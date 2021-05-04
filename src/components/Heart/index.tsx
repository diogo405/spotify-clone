import React, {useState} from 'react'
import './styles.css'

interface IHeart {
  size?: 'regular' | 'big'
}

const Heart: React.FC<IHeart> = ({size = 'regular'}) => {
  const [active, setActive] = useState(false)

  return (
    <div onClick={() => setActive(!active)}>
      {active ? (
        <svg
          className={size === 'big' ? 'heart heart--full heart--big' : 'heart heart--full'}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
        </svg>
      ) : (
        <svg
          className={size === 'big' ? 'heart heart--big' : 'heart'}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
        </svg>
      )}
    </div>
  )
}

export default Heart
