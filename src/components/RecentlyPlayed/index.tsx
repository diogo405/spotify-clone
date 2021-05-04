import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link to={`/album/${album.id}`} key={album.id}>
              <Card
                id={album.id}
                title={album.title}
                artist={album.artist}
                thumbnail={album.thumbnail}
                key={album.id}
              />
            </Link>
          ))
        )}
      </div>
    </section>
  )
}

export default RecentlyPlayed
