import React from 'react'
import Back from '../../components/Back'
import Play from '../../components/Play'
import Heart from '../../components/Heart'
import DotMenu from '../../components/DotMenu'
import './styles.css'

const AlbumPage = () => {
  return (
    <>
      <Back url="/" />
      <header className="header">
        <div className="header__image" style={{backgroundImage: 'url(https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5)'}}></div>
        <div className="header__wrapper">
          <h2 className="header__subtitle">album</h2>
          <h1 className="header__title">Scorpion</h1>
        </div>
      </header>
      <div className="actions">
        <Play size="big" />
        <Heart size="big" />
        <DotMenu />
      </div>
    </>
  )
}

export default AlbumPage
