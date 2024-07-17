import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowserPage from './Pages/BrowserPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import RentYourCar from './Pages/RentYourCar.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/browse',
        element:<BrowserPage/>
      },
      {
        path:'/rent-your-car',
        element:<RentYourCar/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

