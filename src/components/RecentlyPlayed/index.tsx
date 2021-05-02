import React from 'react'
import './styles.css'
import Skeleton from '../Skeleton'
import Card, {ICard} from '../Card'

interface IRecentPlayed {
  albums: Array<ICard>
  loading: boolean
}

const RecentlyPlayed: React.FC<IRecentPlayed> = ({albums, loading}) => {
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
              key={album.id}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default RecentlyPlayed
