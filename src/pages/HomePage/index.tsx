import React, {useEffect, useState} from 'react'
import {ICard} from '../../components/Card'
import Greeting from '../../components/Greeting'
import RecentlyPlayed from '../../components/RecentlyPlayed'
import {
  getGreeting,
  getRecentPlayed,
  ISuggestion,
} from '../../API'
import './styles.css'

const HomePage = () => {
  const [greetingSuggestions, setGreetingSuggestions] = useState<
    Array<ISuggestion>
  >([])
  const [greetingSuggestionsLoading, setGreetingSuggestionsLoading] = useState(
    true
  )
  const [recentPlayed, setRecentPlayed] = useState<Array<ICard>>([])
  const [recentPlayedLoading, setRecentPlayedLoading] = useState(true)

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
  }, [])

  return (
    <>
      <Greeting
        greetingSuggestions={greetingSuggestions}
        loading={greetingSuggestionsLoading}
      />
      <RecentlyPlayed albums={recentPlayed} loading={recentPlayedLoading} />
    </>
  )
}

export default HomePage
