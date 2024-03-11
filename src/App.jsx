import React from 'react'
import Body from './Components/RoutingConfig'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <Provider store={appStore}>
    <Header/>
    <Outlet/>
    </Provider>
  )
}

export default App