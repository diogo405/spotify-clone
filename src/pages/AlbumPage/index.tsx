import React, {useState, useEffect} from 'react'
import Back from '../../components/Back'
import Play from '../../components/Play'
import Heart from '../../components/Heart'
import DotMenu from '../../components/DotMenu'
import Skeleton from '../../components/Skeleton'
import Track, {ITrack} from '../../components/Track'
import {getTracks} from '../../API'
import { useAppSelector } from '../../app/hooks'
import './styles.css'

const AlbumPage = () => {
  const album = useAppSelector((state) => state.album)
  const [tracks, setTracks] = useState<Array<ITrack>>([])
  const [loading, setLoading] = useState(true)
  const main = document.querySelector('main')!

  useEffect(() => {
    (async () => {
      main.scrollTo(0, 0)
      window.scrollTo(0, 0) // mobile :|
      const res = await getTracks()
      setTracks(res)
      setLoading(false)
    })()
  }, [main])

  return (
    <>
      <Back url="/" />
      <header className="header">
        <div className="header__image" style={{backgroundImage: `url(${album.thumbnail})`}}></div>
        <div className="header__wrapper">
          <h2 className="header__subtitle">album</h2>
          <h1 className="header__title">{album.title}</h1>
        </div>
      </header>
      <div className="actions">
        <Play size="big" />
        <Heart size="big" />
        <DotMenu />
      </div>
      <hr className="separator" />
      <div className="tracks">
        {loading ? 
          [...Array(10).keys()].map(n => (<Skeleton height="50px" key={n} />)) :
          tracks.map((track, idx) => <Track name={track.name} length={track.length} number={track.number} key={idx} />)
        }
      </div>
    </>
  )
}

export default AlbumPage
