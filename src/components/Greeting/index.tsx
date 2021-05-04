import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'
import {ISuggestion} from '../../API'
import Chip from '../Chip'
import Skeleton from '../Skeleton'
import {useAppDispatch} from '../../app/hooks'
import {set} from '../../features/album/albumSlice'

interface IGreeting {
  greetingSuggestions: Array<ISuggestion>
  loading: boolean
}

const Greeting: React.FC<IGreeting> = ({greetingSuggestions, loading}) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleChip = (id: number, title: string, thumbnail: string) => {
    dispatch(set({title, thumbnail}))
    history.push(`/album/${id}`)
  }

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
            <Chip
              thumbnail={suggestion.thumbnail}
              onClick={() =>
                handleChip(
                  suggestion.id,
                  suggestion.title,
                  suggestion.thumbnail
                )
              }
              key={suggestion.id}
            >
              {suggestion.title}
            </Chip>
          ))
        )}
      </div>
    </section>
  )
}

export default Greeting
