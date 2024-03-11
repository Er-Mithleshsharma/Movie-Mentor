import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './Components/RoutingConfig.jsx'
import RoutingConfig from './Components/RoutingConfig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutingConfig />
  </React.StrictMode>,
)
