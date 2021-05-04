import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'
import Skeleton from '../Skeleton'
import Card, {ICard} from '../Card'
import {useAppDispatch} from '../../app/hooks'
import {set} from '../../features/album/albumSlice'

interface IRecentPlayed {
  albums: Array<ICard>
  loading: boolean
}

const RecentlyPlayed: React.FC<IRecentPlayed> = ({albums, loading}) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleCard = (id: number, title: string, thumbnail: string) => {
    dispatch(set({title, thumbnail}))
    history.push(`/album/${id}`)
  }

  return (
    <section className="rplayed">
      <h2 className="subtitle">Recently Played</h2>
      <div className="rplayed__grid">
        {loading ? (
          <>
            <Skeleton height="270px" />
            <Skeleton height="270px" />
            <Skeleton height="270px" />
            <Skeleton height="270px" />
          </>
        ) : (
          albums.map(album => (
            <Card
              id={album.id}
              title={album.title}
              artist={album.artist}
              thumbnail={album.thumbnail}
              onClick={() => handleCard(album.id, album.title, album.thumbnail)}
              key={album.id}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default RecentlyPlayed
