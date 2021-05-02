import React, {useEffect, useState} from 'react'
import {ICard} from './components/Card'
import Greeting from './components/Greeting'
import RecentlyPlayed from './components/RecentlyPlayed'
import Playlists from './components/Playlists'
import {getGreeting, getRecentPlayed, getPlaylists, ISuggestion} from './API'
import './App.css'

const App = () => {
  const [greetingSuggestions, setGreetingSuggestions] = useState<
    Array<ISuggestion>
  >([])
  const [greetingSuggestionsLoading, setGreetingSuggestionsLoading] = useState(
    true
  )
  const [recentPlayed, setRecentPlayed] = useState<Array<ICard>>([])
  const [recentPlayedLoading, setRecentPlayedLoading] = useState(true)
  const [playlists, setPlaylists] = useState<Array<string>>([])
  const [playlistsLoading, setPlaylistsLoading] = useState(true)

  useEffect(() => {

    // Without async/await so they load async

    getGreeting().then(res => {
      setGreetingSuggestions(res)
      setGreetingSuggestionsLoading(false)
    })

    getRecentPlayed().then(res => {
      setRecentPlayed(res)
      setRecentPlayedLoading(false)
    })

    getPlaylists().then(res => {
      setPlaylists(res)
      setPlaylistsLoading(false)
    })
  }, [])

  return (
    <div className="app">
      <aside className="sidebar">
        <svg
          className="logo"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z" />
        </svg>
        <nav className="menu">
          <ul className="menu__list">
            <li className="list-item">
              <svg className="list-item__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
              <label className="list-item__label">Home</label>
            </li>
            <li className="list-item">
              <svg className="list-item__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
              <label className="list-item__label">Search</label>
            </li>
            <li className="list-item">
              <svg className="list-item__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.495 4c-1.375 0-1.375-2 0-2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505z"/></svg>
              <label className="list-item__label">Library</label>
            </li>
          </ul>
          <hr className="menu__separator"/>
          <Playlists playlists={playlists} loading={playlistsLoading} />
        </nav>
      </aside>
      <main className="main">
        <Greeting
          greetingSuggestions={greetingSuggestions}
          loading={greetingSuggestionsLoading}
        />
        <RecentlyPlayed albums={recentPlayed} loading={recentPlayedLoading} />
      </main>
    </div>
  )
}

export default App
