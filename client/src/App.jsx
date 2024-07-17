import React from 'react'
import NavigationBar from './Components/NavigationBar'
import HomePage from './Pages/HomePage'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default App