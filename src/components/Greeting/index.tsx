import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import {ISuggestion} from '../../API'
import Chip from '../Chip'
import Skeleton from '../Skeleton'

interface IGreeting {
  greetingSuggestions: Array<ISuggestion>
  loading: boolean
}

const Greeting: React.FC<IGreeting> = ({greetingSuggestions, loading}) => {
  return (
    <section className="greeting">
      <h2 className="title">Howzit</h2>
      <div className="greeting__grid">
        {loading ? (
          <>
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
          </>
        ) : (
          greetingSuggestions.map(suggestion => (
            <Link to={`/album/${suggestion.id}`} key={suggestion.id}>
              <Chip thumbnail={suggestion.thumbnail}>
                {suggestion.title}
              </Chip>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}

export default Greeting
