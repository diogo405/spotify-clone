import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import HomePage from './pages/HomePage'
import AlbumPage from './pages/AlbumPage'
import Sidebar from './components/Sidebar'
import './App.css'
import {store} from './app/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main">
            <Switch>
              <Route path="/album/:id">
                <AlbumPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
