import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AlbumPage from './pages/AlbumPage'
import Sidebar from './components/Sidebar'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Sidebar />
          <main className="main">
            <Route path="/album/:id">
              <AlbumPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </main>
        </div>
      </Switch>
    </Router>
  )
}

export default App
