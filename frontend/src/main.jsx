import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar.jsx'
import './App.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <NavBar/>
    <div className='main-content'>
      <App />
    </div>
    </Router>
  </React.StrictMode>,
)
