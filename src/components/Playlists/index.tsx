import React from 'react'
import Skeleton from '../Skeleton'
import './styles.css'

interface IPlaylists {
  playlists: Array<string>,
  loading: boolean,
}

const Playlists: React.FC<IPlaylists> = ({playlists, loading}) => {
  if (loading) {
    return (
      <ul className="playlists">
        {[...Array(20).keys()].map(n => <Skeleton height="20px" key={n} />)}
      </ul>
    )
  }

  return (
    <ul className="playlists">
      {playlists.map((playlist, index) => <li className="playlist" key={index}>{playlist}</li>)}
    </ul>
  )
}

export default Playlists
