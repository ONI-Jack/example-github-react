import React from 'react'
import './index.css'
import './Bulma.sass'
import AppHeader from './components/AppHeader'
import Routing from './routes'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routing />
    </div>
  )
}

export default App
